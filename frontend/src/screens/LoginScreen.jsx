import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { login } from "../actions/userActions";
import FormContainer from "../components/shared/FormContainer";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email, password));
  };

  return (
    <>
      <FormContainer>
        <h1>SIGN IN</h1>
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
        <Row>
          <Col>
            New User ?&nbsp;
            <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
              Register
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="my-4">
            Are you Admin ? <Link to={"/adminLogin"}>Admin Dashboard</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
