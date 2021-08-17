import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
// import Products from "../products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  // const [Products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // const fetchProducts = async () => {
    //   // const res = await axios.get('/products');
    //   // The information received from axios is in .data
    //   // setProducts(res.data);
    //   // Directly destructure it
    //   // http://localhost:8080/
    //   const { data } = await axios.get("/api/products");
    //   // console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();

    //  Using REDUX

    dispatch(listProducts());
  }, []);

  const Products = [];

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
