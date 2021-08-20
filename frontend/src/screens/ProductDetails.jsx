import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

// import Product from "../products";
// import axios from "axios";
import {
  ListGroup,
  Image,
  Row,
  Col,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

const ProductDetails = ({ history, match }) => {
  // const [product, setProduct] = useState([]);
  // const product = Product.find((p) => p._id === match.params.id);

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${match.params.id}`);
  //     setProduct(data);
  //   };
  //   fetchProduct();
  // }, [match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}/?qty=${qty}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Link to="/" className="btn btn-dark my-3">
            <i className="fas fa-arrow-left"></i>&nbsp;Go back to Home Screen
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={` from ${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price : ${product.price}</ListGroupItem>
                <ListGroupItem>{product.description}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroupItem>
                <Row>
                  <Col>Status</Col>
                  {product.countInStock > 0 ? (
                    <Col className={"success-stock-color"}>In Stock</Col>
                  ) : (
                    <Col className={"not-success-stock-color"}>
                      Out of Stock
                    </Col>
                  )}
                </Row>
              </ListGroupItem>
              {product.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>
                    <Form.Select
                      aria-label="Default select example"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                    {/* <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control> */}
                  </Row>
                </ListGroupItem>
              )}
              <ListGroupItem className="d-grid">
                {/* Button type="btn-block" and no className above */}
                <Button type="button" onClick={addToCartHandler}>
                  Addd to cart
                </Button>
              </ListGroupItem>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductDetails;
