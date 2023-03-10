import React from 'react'

const Square = ({ color, hexValue, isDark }) => {
  return (
    <main>
      <section
        style={{ 
        'width': '200px',
        'height': '200px',
        'borderRadius': '10px',
        'border': '1px solid black',
        'backgroundColor': color,
         color: isDark ? '#000' : '#FFF'
      }}>
        <p 
          className='label'
          style={{
            'marginTop': '30%'
          }}>{color ? color : 'Empty Value'}</p>
        <p>{hexValue ? hexValue : null }</p>
      </section>

    </main>

  )
}

export default Square