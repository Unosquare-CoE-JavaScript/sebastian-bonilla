import { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOrderPhases } from "../../contexts/OrderPhases";
import { useOrderDetails } from "../../contexts/OrderDetails";
import AlertBanner from "../common/AlertBanner";

export default function OrderConfirmation() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [, nextPhase] = useOrderPhases();
  const [, , resetAll] = useOrderDetails();
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((res) => setOrderNumber(res.data.orderNumber))
      .catch((error) => {
        setError(true);
        // TODO: handle error response
      });
  }, [setOrderNumber]);

  if (error) {
    return <AlertBanner />;
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <h1>Thank you!</h1>
      <h3>Your order number is {orderNumber ? orderNumber : "Loading"}</h3>
      <p>as per our terms and conditions, nothing will happen now</p>
      <Button
        variant="primary"
        type="button"
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
