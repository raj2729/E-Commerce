import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <div className="container">
        <h1>E-Commerce App</h1>
      </div> */}
        {/* is equivalent to below */}
        <Container>
          <h1>E-Commerce App</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
