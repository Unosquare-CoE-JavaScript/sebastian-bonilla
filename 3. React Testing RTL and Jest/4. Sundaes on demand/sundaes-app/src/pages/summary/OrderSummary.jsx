import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderSummary() {
  const [orderDetails] = useOrderDetails();

  return (
    <>
      <h1>Order Summary</h1>
      <h2>Scoops: {orderDetails.totals.scoops}</h2>
      <ul>
        {Array.from(orderDetails.scoops).map(([scoop, quantity]) => (
          <li key={scoop}>
            {quantity} {scoop}
          </li>
        ))}
      </ul>
      <ul>
        <h2>Toppings: {orderDetails.totals.toppings}</h2>
        {Array.from(orderDetails.toppings).map(([topping, quantity]) => (
          <li key={topping}>
            {quantity} {topping}
          </li>
        ))}
      </ul>
      <h1>Total: {orderDetails.totals.grandTotal}</h1>
    </>
  );
}
