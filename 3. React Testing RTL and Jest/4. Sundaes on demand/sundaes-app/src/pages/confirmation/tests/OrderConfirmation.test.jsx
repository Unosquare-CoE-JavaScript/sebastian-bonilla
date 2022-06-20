import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";

import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderConfirmation from "../OrderConfirmation";
import { OrderPhasesProvider } from "../../../contexts/OrderPhases";

test.only("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.post("http://localhost:3030/order", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(
    <OrderPhasesProvider>
      <OrderConfirmation />
    </OrderPhasesProvider>
  );

  await waitFor(async () => {
    const alerts = await screen.findByRole("alert");
    expect(alerts).toBeInTheDocument();
  });
});
