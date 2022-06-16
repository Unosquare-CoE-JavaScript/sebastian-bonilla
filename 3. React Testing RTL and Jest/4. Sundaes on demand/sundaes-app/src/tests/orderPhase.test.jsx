import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", async () => {
  // render app
  render(<App />);

  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "2");

  const cherriesCheck = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  await userEvent.click(cherriesCheck);

  // find and click order button
  const sendOrderButton = await screen.findByRole("button", {
    name: "Order Sundae!",
  });
  await userEvent.click(sendOrderButton);
  // check the summary information is correct based on our order

  screen.getByText("Order Summary");
  screen.getByText("Scoops: $4.00");
  screen.getByText("2 Vanilla");
  screen.getByText("Toppings: $1.50");
  screen.getByText("1 Cherries");
  screen.getByText("Total: $5.50");

  // accept terms and conditions and click button to confirm order

  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  const buttonConfirm = screen.getByRole("button", {
    name: "Confirm order",
  });

  expect(buttonConfirm).toBeDisabled();
  expect(checkbox).not.toBeChecked();

  // activate terms and conditions
  await userEvent.click(checkbox);

  expect(buttonConfirm).toBeEnabled();
  expect(checkbox).toBeChecked();

  await userEvent.click(buttonConfirm);

  // confirm order number on confirmation page
  screen.getByText("Thank you!", { exact: false });
  screen.getByText("as per our terms and conditions", { exact: false });

  // click "new order" button on confirmation page
  const buttonNewOrder = screen.getByRole("button", {
    name: "Create new order",
  });
  await userEvent.click(buttonNewOrder);
  // check that scoops and toppings subtotals have been reset
  const vanillaInputAgain = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  expect(vanillaInputAgain).toHaveValue(0);
  expect(cherriesCheck).toBeChecked();
});
