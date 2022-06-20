import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderSummary() {
  const [orderDetails] = useOrderDetails();
  let toppingDisplay = null;

  if (orderDetails.toppings && Array.from(orderDetails.toppings).length > 0) {
    toppingDisplay = (
      <>
        <h2>Toppings: {orderDetails.totals.toppings}</h2>
        <ul>
          {Array.from(orderDetails.toppings).map(([topping, quantity]) => (
            <li key={topping}>
              {quantity} {topping}
            </li>
          ))}
        </ul>
      </>
    );
  }

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

      {toppingDisplay}

      <h1>Total: {orderDetails.totals.grandTotal}</h1>
    </>
  );
}
