import React from 'react'

const Square = ({ color, setColor, changeColor }) => {
  return (
    <main>
      <section
        style={{ 
        'width': '200px',
        'height': '200px',
        'borderRadius': '10px',
        'border': '1px solid black',
        'backgroundColor': color
      }}>
        <p>{color ? color : 'Empty Value'}</p>
      </section>

    </main>

  )
}

export default Square