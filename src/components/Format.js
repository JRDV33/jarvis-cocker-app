// import React from 'react'

const Format = ({ format }) => {
  let colorVariable
  switch (FormData.name) {
    case 'LP':
      colorVariable = '#E8435D'
      break
    case 'EP':
      colorVariable = '#D57C70'
      break
    case 'Live':
      colorVariable = '#44692F'
      break
    case 'Compilation':
      colorVariable = '#8A5695'
      break
    case 'Single':
      colorVariable = '#894A5D'
      break
  }
  return (
    <div>
      <p
        style={{
          backgroundColor: colorVariable,
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '5px',
          margin: '3px',
          border: '1px solid #29272C',
          borderRadius: '5px'
        }}
      >
        {format.format}
      </p>
    </div>
  )
}
export default Format
