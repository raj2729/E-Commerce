import React from "react";
import { Card } from "react-bootstrap";

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/products/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a>
        <Card.Body>
          {/* To remove underlines */}
          {/* <a
              href={`/products/${product._id}`}
              style={{ textDecoration: "none" }}
            > */}
          <a href={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text>$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
