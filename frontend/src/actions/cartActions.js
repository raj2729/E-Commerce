import axios from "axios";
import Message from "../components/shared/Message";

import {
  CART_ADD_ITEM,
  CART_PAYMENT_METHOD,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstant";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  } catch (error) {}

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    // const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
    // throw new Error("Hello World u r hacked");
  } catch (error) {
    <Message variant="danger">{error}</Message>;
  }
};

export const saveShippingAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
    // throw new Error("Hello World u r hacked");
  } catch (error) {
    <Message variant="danger">{error}</Message>;
  }
};

export const savePaymentMethods = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_PAYMENT_METHOD,
      payload: data,
    });

    localStorage.setItem("paymentMethod", JSON.stringify(data));
    // throw new Error("Hello World u r hacked");
  } catch (error) {
    <Message variant="danger">{error}</Message>;
  }
};
