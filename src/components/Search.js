import React from 'react'
import colorNames from 'colornames'

const Search = ({ color, setColor, changeColor, hexValue, setHexValue }) => {
  return (
    <section>
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
        onChange={(e) => {
          setColor(e.target.value);
        // Translate color to hexValue and set that hexValue as new hexValue state
          setHexValue(colorNames(e.target.value));
        }}
        onKeyDown={(e) => changeColor(e.target.value)}
      >        
      </input>
    </section>
  )
}

export default Search