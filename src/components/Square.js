import React from 'react'

const Square = ({ color, setColor, changeColor }) => {
  return (
    <main>
      <div className='color-square'
        style={{ 
          'width': '200px',
          'height': '200px',
          'borderRadius': '10px',
          'border': '1px solid black',
          'backgroundColor': color
        }}>
        <p>{color ? color : 'Empty Value'}</p>
      </div>

    </main>

  )
}

export default Square