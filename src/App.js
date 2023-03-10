import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Square from './components/Square';
import Search from './components/Search';

function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  // set dark as default
  const [isDark, setIsDark] = useState(true);

  const changeColor = (color) => {
    console.log(color)
  }

  return (
    <div className="App"
      style={{
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'position': 'relative',
        'marginTop': '10%'
      }}>

      <h2>React Color Changer</h2>

    
      {/* <div className='color-square'
        style={{ 
          'width': '200px',
          'height': '200px',
          'borderRadius': '10px',
          'border': '1px solid black',
          'backgroundColor': color
        }}>
        <p>{color ? color : 'Empty Value'}</p>
      </div> */}

      <Square
        color={color}
        setColor={setColor}
        onKeyDown={changeColor}
        hexValue={hexValue}
        isDark={isDark}
      />

      {/* <input 
        type="text"
        autofocus
        placeholder='Add color name'
        required
        value={color}
        style={{
          'width': '195px',
          'height': '40px',
          'borderRadius': '10px',
          'marginTop': '10px'
        }}  
        onChange={(e) => setColor(e.target.value)}
        onKeyDown={(e) => changeColor(e.target.value)}
      >        
      </input> */}

      <Search
        color={color}
        setColor={setColor}
        onKeyDown={changeColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDark={isDark}
        setIsDark={setIsDark}
      />

    </div>
  );
}

export default App;
