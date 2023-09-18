import React from 'react'
import './css/IconedButton.css'

function IconedButton({icon, text, background, color, borderColor}) {
  return (
    <div className='IconedButton' style={{ backgroundColor: background, color:color, borderColor:borderColor}}>
        <div className='icon'>
            {icon}
        </div>
        <p className='text'>
            {text}
        </p>
    </div>
  )
}

export default IconedButton