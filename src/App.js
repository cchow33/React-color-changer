import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('')

  const changeColor = (color) => {
    console.log(`${color} picked`)
  }


  return (
    <div className="App"
        style={{
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'center',
        }}>
      
      <div className="colorSquare"
        style={{
          'position': 'relative',
          'marginTop': '10%'
        }}>

        <div className='color-square'
          style={{ 
            'width': '200px',
            'height': '200px',
            'borderRadius': '10px',
            'border': '1px solid black'
          }}>
          <p>{p.length > 0 ? 'Empty value' : {color}}</p>
        </div>

        <input 
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
        >
          
        </input>

        </div>
    </div>
  );
}

export default App;
