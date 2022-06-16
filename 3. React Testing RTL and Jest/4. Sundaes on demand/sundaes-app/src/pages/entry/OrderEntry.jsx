import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { useOrderPhases } from "../../contexts/OrderPhases";
import Button from "react-bootstrap/Button";

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails();
  const [, nextPhase] = useOrderPhases();

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals["grandTotal"]}</h2>
      <Button variant="primary" type="submit" onClick={() => nextPhase()}>
        Order Sundae!
      </Button>
    </div>
  );
}
