import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="my-3">
        {/* <div className="container">
        <h1>E-Commerce App</h1>
      </div> */}
        {/* is equivalent to below */}
        <Container>
          <h1>E-Commerce App</h1>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
