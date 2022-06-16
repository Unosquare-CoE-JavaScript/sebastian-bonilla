import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../OrderEntry";
import { OrderPhasesProvider } from "../../../contexts/OrderPhases";

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />);

  // make sure total start out $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });

  expect(scoopsSubtotal).toHaveTextContent("0.00");
  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "1");

  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, "2");

  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update toppings subtotal when toppings change", async () => {
  render(<Options optionType="toppings" />);

  // make sure total start out $0.00
  const toppingsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });

  expect(toppingsSubtotal).toHaveTextContent("0.00");
  // update cherries toppings to checked and check the subtotal
  const cherriesCheck = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  await userEvent.click(cherriesCheck);

  expect(toppingsSubtotal).toHaveTextContent("1.50");

  // update M&Ms topping checked and check subtotal
  const mnmsCheck = await screen.findByRole("checkbox", {
    name: "M&Ms",
  });

  await userEvent.click(mnmsCheck);

  expect(toppingsSubtotal).toHaveTextContent("3.00");
});

describe("grand total", () => {
  test("grand total starts at $0.00", () => {
    render(
      <OrderPhasesProvider>
        <OrderEntry />
      </OrderPhasesProvider>
    );

    const grandTotalText = screen.getByText("Grand total: $", {
      exact: false,
    });

    expect(grandTotalText).toHaveTextContent("0.00");
  });

  test("grand total update properly if scoop is added first", async () => {
    render(
      <OrderPhasesProvider>
        <OrderEntry />
      </OrderPhasesProvider>
    );

    const grandTotalText = screen.getByText("Grand total: $", {
      exact: false,
    });

    // update vanilla scoops to 1 and check the total
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, "1");

    expect(grandTotalText).toHaveTextContent("2.00");

    // update M&Ms topping checked and check total
    const mnmsCheck = await screen.findByRole("checkbox", {
      name: "M&Ms",
    });

    await userEvent.click(mnmsCheck);

    expect(grandTotalText).toHaveTextContent("3.50");
  });

  test("grand total update properly if topping is added first", async () => {
    render(
      <OrderPhasesProvider>
        <OrderEntry />
      </OrderPhasesProvider>
    );

    const grandTotalText = screen.getByText("Grand total: $", {
      exact: false,
    });

    // update M&Ms topping checked and check total
    const mnmsCheck = await screen.findByRole("checkbox", {
      name: "M&Ms",
    });

    await userEvent.click(mnmsCheck);
    expect(grandTotalText).toHaveTextContent("1.50");

    // update vanilla scoops to 1 and check the total
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, "1");

    expect(grandTotalText).toHaveTextContent("3.50");
  });

  test("grand total update properly if item is removed", async () => {
    render(
      <OrderPhasesProvider>
        <OrderEntry />
      </OrderPhasesProvider>
    );

    const grandTotalText = screen.getByText("Grand total: $", {
      exact: false,
    });

    // update M&Ms topping checked and check total
    const mnmsCheck = await screen.findByRole("checkbox", {
      name: "M&Ms",
    });

    await userEvent.click(mnmsCheck);
    expect(grandTotalText).toHaveTextContent("1.50");

    // update vanilla scoops to 1 and check the total
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, "1");

    expect(grandTotalText).toHaveTextContent("3.50");

    await userEvent.click(mnmsCheck);
    expect(grandTotalText).toHaveTextContent("2.00");
  });
});
