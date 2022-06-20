import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScoopOption from "../ScoopOption";

test("Must to validate wrong input on scoops", async () => {
  render(
    <ScoopOption
      name="Vanilla"
      imagePath="/images/vanilla.png"
      updateItemCount={jest.fn()}
    />
  );

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  // expect input starts with zero
  expect(vanillaInput).toHaveValue(0);

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "-1");

  // expect that is an invalid input
  expect(vanillaInput).toHaveClass("is-invalid");

  // reset to zero
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "0");
  expect(vanillaInput).not.toHaveClass("is-invalid");

  // set value to a decimal value
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "1.5");
  expect(vanillaInput).toHaveClass("is-invalid");

  // reset to zero
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "0");
  expect(vanillaInput).not.toHaveClass("is-invalid");

  // set value to a value grater than 10
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "20");
  expect(vanillaInput).toHaveClass("is-invalid");

  // reset to zero
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "0");
  expect(vanillaInput).not.toHaveClass("is-invalid");
});
