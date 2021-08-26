import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import orders1 from "../assets/orders1.svg";
import users1 from "../assets/users1.svg";

const AdminHomeScreen = ({ history }) => {
  const orderHandler = (e) => {
    e.preventDefault();
    history.push("/adminViewOrders");
  };

  const userHandler = (e) => {
    e.preventDefault();
    history.push("/adminViewUsers");
  };

  return (
    <>
      <Row>
        <Col md={5} className="text-center mt-5">
          <Image
            src={orders1}
            fluid
            alt="ordersImage"
            style={{
              height: "350px",
              width: "350px",
            }}
          ></Image>
          <Button
            type="button"
            className="justify-content-md-center col mt-5"
            style={{
              color: "white",
              backgroundColor: "#da1249",
            }}
            onClick={orderHandler}
          >
            Manage Orders
          </Button>
        </Col>
        <Col md={2}></Col>
        <Col md={5} className="text-center mt-5">
          <Image
            src={users1}
            fluid
            alt="usersImage"
            style={{
              height: "350px",
              width: "350px",
            }}
          ></Image>
          <Button
            type="button"
            className="justify-content-md-center col mt-5"
            style={{ color: "white", backgroundColor: "#da1249" }}
            onClick={userHandler}
          >
            Manage Users
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AdminHomeScreen;
