import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";
import { OrderPhasesProvider } from "../../../contexts/OrderPhases";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("terms and condition flow test", async () => {
  render(
    <OrderDetailsProvider>
      <OrderPhasesProvider>
        <SummaryForm />
      </OrderPhasesProvider>
    </OrderDetailsProvider>
  );
  // set up userEvent
  const user = userEvent.setup();

  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  const button = screen.getByRole("button", {
    name: "Confirm order",
  });

  expect(button).toBeDisabled();
  expect(checkbox).not.toBeChecked();

  // activate terms and conditions
  await user.click(checkbox);

  expect(button).toBeEnabled();
  expect(checkbox).toBeChecked();

  // de-activate terms and conditions
  await user.click(checkbox);

  expect(button).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

test("popover responds to hover", async () => {
  render(
    <OrderDetailsProvider>
      <OrderPhasesProvider>
        <SummaryForm />
      </OrderPhasesProvider>
    </OrderDetailsProvider>
  );
  // set up userEvent
  const user = userEvent.setup();

  // popover start out
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndCondition = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndCondition);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover dissapears when we mouse out
  await user.unhover(termsAndCondition);

  const overlay = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  expect(overlay).not.toBeInTheDocument();
});
