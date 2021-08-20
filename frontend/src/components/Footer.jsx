import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <span>Copyright &copy; Raj Solutions.</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
