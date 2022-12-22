import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"
        style={{
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'center',
        }}>
      
      <div className="color-container"
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
          <p className="label">Empty Value</p>
        </div>

        <input 
          type="text"
          placeholder='Add color name'
          style={{
            'width': '195px',
            'height': '40px',
            'borderRadius': '10px',
            'marginTop': '10px'
          }}  
        >
        </input>

        </div>
    </div>
  );
}

export default App;
