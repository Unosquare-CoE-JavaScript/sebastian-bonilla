import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has the correct initial color', () => {
  render(<App />);

  // find an element with and look for initial text
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // expect the background color to be red
  expect(button).toHaveStyle('background-color:MediumVioletRed');

  // expect change color and text when clicked
  fireEvent.click(button);

  expect(button).toHaveStyle('background-color:MidnightBlue');

  expect(button.textContent).toBe('Change to Medium Violet Red');

});

test('Initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // check that the button starts out enabled
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('Checkbox enabled/desabled button functionality', () => {
  render(<App />);

  // we get the button and checkbox references
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // expect that when checkbox is checked button is disabled
  fireEvent.click(checkbox);

  // check that the button is now disabled
  expect(button).toBeDisabled();

  expect(checkbox).toBeChecked();

  // expect that when checkbox again is unchecked and button is enabled
  fireEvent.click(checkbox);

  // check that the button is now disabled
  expect(button).toBeEnabled();

  expect(checkbox).not.toBeChecked();


});

test('Disable button has gray background and reverts to red', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray');

  //re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: MediumVioletRed');

})

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(button);
  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: MidnightBlue');

})


describe('spaces before camel-case capital letter', () => {
  test('works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');

  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');

  });
})