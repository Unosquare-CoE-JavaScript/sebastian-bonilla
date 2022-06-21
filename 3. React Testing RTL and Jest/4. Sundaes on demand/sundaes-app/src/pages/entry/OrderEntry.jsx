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
      <Button
        variant="primary"
        type="button"
        onClick={() => nextPhase()}
        disabled={
          Array.from(orderDetails.scoops.values()).reduce(
            (acc, val) => acc + val,
            0
          ) === 0 &&
          Array.from(orderDetails.toppings.values()).reduce(
            (acc, val) => acc + val,
            0
          ) === 0
        }
      >
        Order Sundae!
      </Button>
    </div>
  );
}
