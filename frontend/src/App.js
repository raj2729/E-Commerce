import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="container">
        <h1>E-Commerce App</h1>
      </div> */}
      {/* is equivalent to below */}
      <Container>
        <h1>E-Commerce App</h1>
      </Container>
      <h1>E-Commerce App</h1>
    </>
  );
}

export default App;
