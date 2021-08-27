import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { listAllOrders } from "../actions/adminActions";
import { listMyOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";
import { ORDER_DETAILS_RESET } from "../constants/orderConstant";
import { ADMIN_VIEW_ORDERS_RESET } from "../constants/adminConstants";

const AdminViewOrdersScreen = ({ location, history }) => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //    If password and confirm password does not match, we will show it inside this below message
  //   const [message, setMessage] = useState("");
  //   const [name, setName] = useState("");

  const dispatch = useDispatch();

  //   const userDetails = useSelector((state) => state.userDetails);
  //   const { loading, error, user } = userDetails;
  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo } = userLogin;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const orderListAll = useSelector((state) => state.orderListAll);
  const { loading, orders, error } = orderListAll;

  //   const orderListMy = useSelector((state) => state.orderListMy);
  //   const { loading: loadingOrders, orders, error: errorOrders } = orderListMy;

  useEffect(() => {
    if (!adminInfo) {
      history.push("/login");
    }
    //   else {
    //       if (!user.name) {
    //         dispatch(getUserDetails("profile"));
    //         dispatch(listMyOrders());
    //       } else {
    //         setName(user.name);
    //         setEmail(user.email);
    //       }
    //     }
    dispatch(listAllOrders());
    dispatch({
      type: ADMIN_VIEW_ORDERS_RESET,
    });
  }, [history, dispatch]);

  return (
    <>
      <Row>
        <Col md={9}>
          <h1>All Orders</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : orders.length === 0 ? (
            <Message variant="danger">No Orders placed</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Date</td>
                  <td>Total</td>
                  <td>Paid</td>
                  <td>Delivered</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {/* <tr>Hello</tr> */}
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice}</td>

                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button variant="light">Details</Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </>
  );
};

export default AdminViewOrdersScreen;
