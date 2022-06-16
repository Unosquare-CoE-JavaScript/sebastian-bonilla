import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const changeColor = () => setButtonColor(newButtonColor);

  return (
    <div>
      <button onClick={changeColor} disabled={buttonDisabled} style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>

      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input type="checkbox" id="disable-button-checkbox" onChange={(e) => setButtonDisabled(e.target.checked)}>
      </input>
    </div>
  );
}

export default App;
