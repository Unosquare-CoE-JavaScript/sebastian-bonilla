import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { OrderPhasesProvider } from "../../../contexts/OrderPhases";

test.only("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(
    <OrderPhasesProvider>
      <OrderEntry />
    </OrderPhasesProvider>
  );

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});

test.only("check that order button is disbale when there is no scoops added", async () => {
  render(
    <OrderPhasesProvider>
      <OrderEntry />
    </OrderPhasesProvider>
  );

  // expect that order button is disabled
  const orderButton = screen.getByRole("button", { name: "Order Sundae!" });
  expect(orderButton).toBeDisabled();

  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "2");

  // expect that button is enabled
  expect(orderButton).toBeEnabled();

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "0");

  // expect that button is disabled
  expect(orderButton).toBeDisabled();
});
