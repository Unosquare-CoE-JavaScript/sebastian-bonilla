import { useOrderPhases } from "../contexts/OrderPhases";
import OrderEntry from "./entry/OrderEntry";
import SummaryForm from "./summary/SummaryForm";
import OrderConfirmation from "./confirmation/OrderConfirmation";

export default function Main() {
  const [orderPhases] = useOrderPhases();

  return (
    <>
      {orderPhases === 1 ? (
        <OrderEntry />
      ) : orderPhases === 2 ? (
        <SummaryForm />
      ) : (
        <OrderConfirmation />
      )}
    </>
  );
}
