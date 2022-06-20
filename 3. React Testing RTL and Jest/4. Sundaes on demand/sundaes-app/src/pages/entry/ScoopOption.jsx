import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function isValidInput(inputNumber) {
  // check if new value has an error
  if (Number.isNaN(inputNumber)) {
    return false;
  } else {
    if (parseInt(inputNumber) < 0) {
      return false;
    } else if (parseInt(inputNumber) > 10) {
      return false;
    } else if (inputNumber.includes(".")) {
      return false;
    }
  }
  return true;
}

export default function ScoopOption({ name, imagePath, updateItemCount }) {
  const [inputError, setInputError] = useState(false);
  const [numberInput, setNumberInput] = useState("0");

  const handleChange = (event) => {
    if (isValidInput(event.target.value)) {
      if (event.target.value.toString().length > 0) {
        updateItemCount(name, event.target.value);
      }

      setNumberInput(event.target.value);
      setInputError(false);
    } else {
      if (numberInput.toString()) {
        updateItemCount(name, numberInput);
      }

      setInputError(true);
    }
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />

      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label
          column
          xs="6"
          style={{
            textAlign: "right",
          }}
        >
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            className={inputError ? "is-invalid" : ""}
            type="number"
            defaultValue={0}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
    </Col>
  );
}
