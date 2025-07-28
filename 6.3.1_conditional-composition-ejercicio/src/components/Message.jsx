import React from 'react'

const Message = ({mensaje}) => {
  return (
    <div>
        {
        mensaje && <p><b>{mensaje}</b></p>
        }
    </div>
  )
}

export default Message