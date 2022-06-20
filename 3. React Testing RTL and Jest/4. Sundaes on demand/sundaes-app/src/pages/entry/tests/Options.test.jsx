import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);

  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /topping$/i });

  expect(scoopImages).toHaveLength(3);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);

  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("not update when there is an error on scoops input", async () => {
  render(<Options optionType="scoops" />);

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  const headingScoops = screen.getByText("Scoops total: $0.00 each");
  expect(headingScoops).toBeInTheDocument();

  // expect input starts with zero
  expect(vanillaInput).toHaveValue(0);

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "-1");

  // expect that is an invalid input
  expect(vanillaInput).toHaveClass("is-invalid");

  const headingScoopsAgain = screen.getByText("Scoops total: $0.00 each");
  expect(headingScoopsAgain).toBeInTheDocument();
});
