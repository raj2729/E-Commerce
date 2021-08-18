import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {
  Row,
  Image,
  Col,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search;
  // console.log(qty);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);

  return (
    <div>
      <h1>Cart Component</h1>
    </div>
  );
};

export default CartScreen;
