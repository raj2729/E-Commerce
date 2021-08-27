import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILS,
  ADMIN_LOGOUT,
  ADMIN_VIEW_ORDERS_REQUEST,
  ADMIN_VIEW_ORDERS_SUCCESS,
  ADMIN_VIEW_ORDERS_FAILS,
  ADMIN_VIEW_ORDERS_RESET,
} from "../constants/adminConstants";

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAILS:
      return { loading: false, error: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminViewOrders = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ADMIN_VIEW_ORDERS_REQUEST:
      return {
        loading: true,
      };
    case ADMIN_VIEW_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ADMIN_VIEW_ORDERS_FAILS:
      return {
        loading: false,
        error: action.payload,
      };
    case ADMIN_VIEW_ORDERS_RESET:
      return { orders: [] };
    default:
      return state;
  }
};
