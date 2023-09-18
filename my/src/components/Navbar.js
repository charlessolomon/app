import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'
import { BiBell } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import Logo from './../assets/images/logo.png'
import { useSelector } from 'react-redux'

import './css/Navbar.css'

function Navbar() {
  const user = useSelector((state) => state.auth.user)

  return (
    <div className='Navbar'>
      <div className='content'>

        <img className='logo' src={Logo} alt="Logo" />

        <div className='search'>
          <BiSearch className='search-icon' />
          <input type="text" placeholder="Search here" />
        </div>

        <div className='right'>
          <div className='create-booking'>
            <BiCalendar />
            <p>Create Booking</p>
          </div>

          <div className='bell'>
            <BiBell />
          </div>

          <div className='user'>
            <img src={user.image} height="32px" alt="Profile" />
            <p>{user.name}</p>
            <BiChevronDown />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar