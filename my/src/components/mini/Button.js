import React from 'react'
import './css/Button.css'

function Button({label, color, background, margin, borderColor}) {
  return (
    <div className='Button'>
        <button style={{color:color, background:background, margin:margin, borderColor:borderColor}}>{label}</button>
    </div>
  )
}

export default Button