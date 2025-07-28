import React from 'react'

const InputNumber = ({numeroNuevo, handleChange}) => {
  return (
    <div>
      <input type="number" 
      value={numeroNuevo}
      placeholder='ingresa un número'
      onChange={handleChange} 
      />
    </div>
  )
}

export default InputNumber