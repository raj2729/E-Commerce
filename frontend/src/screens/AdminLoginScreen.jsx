import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { adminlogin } from "../actions/adminActions";
import FormContainer from "../components/shared/FormContainer";

const AdminLoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/adminHomeScreen";

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      history.push(redirect);
    }
  }, [adminInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(adminlogin(email, password));
  };

  return (
    <>
      <FormContainer>
        <h1>Admin SIGN IN</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader></Loader>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email" className="mt-4">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="my-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="my-4">
            SIGN IN
          </Button>
        </Form>
        {/* <Row>
          <Col>
            New User ?&nbsp;
            <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
              Register
            </Link>
          </Col>
        </Row> */}
        <Row>
          <Col className="my-4">
            Not an Admin ? <Link to={"/login"}>Login as User</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default AdminLoginScreen;
