import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Route used to show different components
import Footer from "./components/footer";
import Header from "./components/header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";

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
          <Route path="/products/:id" component={ProductDetails} exact></Route>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
