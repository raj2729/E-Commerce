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
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

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
