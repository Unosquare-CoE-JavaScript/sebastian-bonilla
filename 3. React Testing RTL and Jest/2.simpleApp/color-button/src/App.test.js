import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App />);

  // find an element with and look for initial text
  const button = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(button).toHaveStyle('background-color:red');

  // expect change color and text when clicked
  fireEvent.click(button);

  expect(button).toHaveStyle('background-color:blue');

  expect(button.textContent).toBe('Change to red');

});

test('Initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  // check that the button starts out enabled
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('Checkbox enabled/desabled button functionality', () => {
  render(<App />);

  // we get the button and checkbox references
  const button = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

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