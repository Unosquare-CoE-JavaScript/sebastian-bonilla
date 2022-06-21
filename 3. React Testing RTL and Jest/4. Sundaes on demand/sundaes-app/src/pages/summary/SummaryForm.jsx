import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import OrderSummary from "./OrderSummary";
import { useOrderPhases } from "../../contexts/OrderPhases";

export default function SummaryForm() {
  const [agreeTC, updateAgreeTC] = React.useState(false);
  const [, nextPhase] = useOrderPhases();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <>
      <OrderSummary />
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={agreeTC}
            onChange={(e) => updateAgreeTC(e.target.checked)}
            label={checkboxLabel}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          disabled={!agreeTC}
          onClick={() => nextPhase()}
        >
          Confirm order
        </Button>
      </Form>
    </>
  );
}
