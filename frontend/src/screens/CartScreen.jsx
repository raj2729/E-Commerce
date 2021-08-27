import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/shared/Message";
import { Link } from "react-router-dom";
import {
  Row,
  Image,
  Col,
  Card,
  Button,
  ListGroupItem,
  ListGroup,
  Form,
} from "react-bootstrap";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search.split("=")[1];
  // console.log(qty);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);

  const removeFromCartHandler = (id) => {
    // console.log("Removed");
    dispatch(removeFromCart(id));
  };

  const checkout = () => {
    // console.log("Checkout");
    history.push("/login?redirect=shipping");
  };

  // const findTotalItems = () => {
  //   var totalItems = 0;
  //   cartItems.map((item) => totalItems + item.qty);
  //   return totalItems;
  // };

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message variant="danger">
              Your Cart is empty &nbsp; <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {/* {
                cartItems.map(item => {

                })
              } */}

              {cartItems.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={3}>
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={3}>
                      <Form.Select
                        aria-label="Default select example"
                        value={Number(item.qty)}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                      <Button
                        type="button"
                        variant="danger"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        {/* <Row> */}
                        Remove<i className="fas fa-trash"></i>
                        {/* </Row> */}
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup vaiant="flush">
              <ListGroupItem>
                {/* reduce fxn executes all values of array and returns a single value, Third argument is of initial value */}
                <h2>
                  Subtotal (
                  {cartItems.reduce(
                    (accumulator, item) =>
                      Number(accumulator) + Number(item.qty),
                    0
                  )}
                  {/* {findTotalItems()})  */}
                  )Items
                </h2>
                $
                {cartItems
                  .reduce(
                    (accumulator, item) => accumulator + item.price * item.qty,
                    0
                  )
                  .toFixed(2)}
              </ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkout}
              >
                Proceed to Checkout
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
