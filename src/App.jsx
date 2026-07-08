import { useState, useRef } from 'react'
import { useEffect } from 'react'
import './App.css'

const buttonLabels = {
  buttonName: 'Click to change color!'
}

const colorNames = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'gray', 'black', 'white']

function App() {
  const [bgColor, setBgColor] = useState('black');
  const previousIndexRef = useRef(colorNames.indexOf(bgColor));

  useEffect(() => {
    const idx = colorNames.indexOf(bgColor);
    if (idx !== -1) previousIndexRef.current = idx;
  }, [bgColor]);

  function getRandomColor() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * colorNames.length);
    } while (previousIndexRef.current === randomIndex);
    previousIndexRef.current = randomIndex;
    return colorNames[randomIndex];
  }

  return (
    <div className="bg-layout" style={{ backgroundColor: bgColor }}>
      <div className="button-container">
        <button 
          className="color-button"
          onClick={() => {
            setBgColor(getRandomColor());
          }}
        >
          {buttonLabels.buttonName}
        </button>
      </div>
    </div>
  )
}

export default App
