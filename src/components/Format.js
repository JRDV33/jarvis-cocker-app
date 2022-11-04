// import React from 'react'
// import album from './Album'

const Format = ({ format }) => {
  let colorVariable
  switch (format) {
    case 'LP':
      colorVariable = '#E8435D'
      break
    case 'EP':
      colorVariable = '#D57C70'
      break
    case 'Live LP':
      colorVariable = '#44692F'
      break
    case 'Compilation':
      colorVariable = '#8A5695'
      break
    case 'Single':
      colorVariable = '#894A5D'
      break
    case 'Book':
      colorVariable = '#894A5D'
      break
    case 'Radio Show':
      colorVariable = '#894A5D'
      break
    case 'Soundtrack':
      colorVariable = '#894A5D'
      break
  }

  return (
    <div>
      <p
        style={{
          backgroundColor: colorVariable,
          color: '#F0ECE9',
          fontSize: '12px',
          fontWeight: '600',
          padding: '5px',
          margin: '3px',
          border: '1px solid #29272C',
          borderRadius: '5px'
        }}
      >
        {format}
      </p>
    </div>
  )
}
export default Format
