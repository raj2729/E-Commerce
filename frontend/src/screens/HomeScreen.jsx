import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
// import Products from "../products";

import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // const res = await axios.get('/products');
      // The information received from axios is in .data
      // setProducts(res.data);

      // Directly destructure it
      // http://localhost:8080/
      const { data } = await axios.get("/api/products");
      // console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} md={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
