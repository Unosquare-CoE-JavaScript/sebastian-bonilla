import { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOrderPhases } from "../../contexts/OrderPhases";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderConfirmation() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [, nextPhase] = useOrderPhases();
  const [, , resetAll] = useOrderDetails();

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((res) => setOrderNumber(res.data.orderNumber))
      .catch((error) => {
        // TODO: handle error response
      });
  }, [setOrderNumber]);

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <h1>Thank you!</h1>
      <h3>Your order number is {orderNumber ? orderNumber : "Loading"}</h3>
      <p>as per our terms and conditions, nothing will happen now</p>
      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          resetAll();
          nextPhase();
        }}
      >
        Create new order
      </Button>
    </Col>
  );
}
