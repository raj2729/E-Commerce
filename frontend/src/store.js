// To manage global state
import { createStore, combineReducers, applyMiddleware } from "redux";
// To send data from 1 component to another component
import thunk from "redux-thunk";
// To get an option of viewing redu from browseer
import { composeWithDevTools } from "redux-devtools-extension";

// Importing reducers
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// get all reducers in a single variable using combineReducers
const reducer = combineReducers({
  // Anytime if u want to access productList it can be accessed using this
  //  It is present inside state and is used using useSelector
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// Initial State
const initialState = {
  cart: {
    // cartItems: "Raj",
    cartItems: cartItemsFromStorage,
  },
};

// communicates between react and redux
const middleware = [thunk];

// creating store object
const store = createStore(
  reducer,
  initialState,
  //   Removed square brackets
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
