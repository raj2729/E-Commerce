import axios from "axios";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILS,
  ADMIN_LOGOUT,
  ADMIN_VIEW_ORDERS_REQUEST,
  ADMIN_VIEW_ORDERS_SUCCESS,
  ADMIN_VIEW_ORDERS_FAILS,
} from "../constants/adminConstants";

export const adminlogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    // to handle headers
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    if (data.isAdmin === true) {
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("adminInfo", JSON.stringify(data));
    } else {
      dispatch({
        type: ADMIN_LOGIN_FAILS,
        payload: "User is not an Admin",
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("adminInfo");
  // dispatch({ type: USER_DETAILS_RESET });
  // dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({
    type: ADMIN_LOGOUT,
  });
};

// All orders visible to admin
export const listAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_VIEW_ORDERS_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();
    // to handle headers
    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/admin/adminViewOrders`, config);

    // dispatch({
    //   type: ORDER_DETAILS_RESET,
    // });
    dispatch({
      type: ADMIN_VIEW_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_VIEW_ORDERS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
