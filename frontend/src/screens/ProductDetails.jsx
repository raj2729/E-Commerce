import React, { useState, useEffect } from "react";
// import Product from "../products";
import axios from "axios";
import {
  ListGroup,
  Image,
  Row,
  Col,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/rating";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);
  // const product = Product.find((p) => p._id === match.params.id);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  return (
    <div>
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
                <Col className={"not-success-stock-color"}>Out of Stock</Col>
              )}
            </Row>
          </ListGroupItem>
          <ListGroupItem className="d-grid">
            {/* Button type="btn-block" and no className above */}
            <Button type="button">Addd to cart</Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
