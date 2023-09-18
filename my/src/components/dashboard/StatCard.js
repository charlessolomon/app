import React from 'react'
import './StatCard.css'

function StatCard({label, icon, colour, number}) {
  return (
    <div className='StatCard'>
        <div className='left'>
            <p className='label'>{label}</p>
            <div className='icon' style={{color:colour}}>{icon}</div>
        </div>
        <div className='right'>
            <div className='wrapper'>
                <h1 className='number'>{number}</h1>
            </div>
        </div>
    </div>
  )
}

export default StatCard