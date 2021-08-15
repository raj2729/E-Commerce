import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/rating";
import { Link } from "react-router-dom";

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        {/* <a href={`/products/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a> */}
        {/*  Same as below  */}
        <Link to={`/products/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          {/* To remove underlines */}
          {/* <a
              href={`/products/${product._id}`}
              style={{ textDecoration: "none" }}
            > */}
          {/* <a href={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a> */}
          {/* Same as below */}
          <Link to={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <div>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>

            {/* <div className="my-3">
              {product.rating} from {product.numReviews} reviews
            </div> */}
          </Card.Text>
          <Card.Text>$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
