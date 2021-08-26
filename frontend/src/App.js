import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Route used to show different components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminHomeScreen from "./screens/AdminHomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        {/* <div className="container">
        <h1>E-Commerce App</h1>
      </div> */}
        {/* is equivalent to below */}
        <Container>
          {/* <h1>E-Commerce App</h1> */}
          {/* <HomeScreen /> */}
          {/* Same as below */}
          {/* exact => path must be exactly same */}
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/login" component={LoginScreen} exact></Route>
          <Route path="/adminLogin" component={AdminLoginScreen} exact></Route>
          <Route
            path="/adminHomeScreen"
            component={AdminHomeScreen}
            exact
          ></Route>
          <Route path="/shipping" component={ShippingScreen} exact></Route>
          <Route path="/payment" component={PaymentScreen} exact></Route>
          <Route path="/order/:id" component={OrderScreen} exact></Route>
          <Route path="/placeOrder" component={PlaceOrderScreen} exact></Route>
          <Route path="/profile" component={ProfileScreen} exact></Route>
          <Route path="/register" component={RegisterScreen} exact></Route>
          <Route path="/products/:id" component={ProductDetails} exact></Route>
          <Route path="/cart/:id?" component={CartScreen} exact></Route>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
