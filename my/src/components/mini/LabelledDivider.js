import React from 'react'
import './css/LabelledDivider.css'

function LabelledDivider({title}) {
    return (
        <div className='LabelledDivider'>
            <p>{title}</p>
            <div className='line'></div>
        </div>
    )
}

export default LabelledDivider