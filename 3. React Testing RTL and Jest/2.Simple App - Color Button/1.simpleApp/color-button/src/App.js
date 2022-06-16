import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const changeColor = () => setButtonColor(newButtonColor);

  return (
    <div>
      <button onClick={changeColor} disabled={buttonDisabled} style={{ backgroundColor: buttonColor }}>Change to {newButtonColor}</button>

      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input type="checkbox" id="disable-button-checkbox" onChange={(e) => setButtonDisabled(e.target.checked)}>        
      </input>
    </div>
  );
}

export default App;
