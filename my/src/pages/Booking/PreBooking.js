import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BiFilterAlt} from 'react-icons/bi'
import {BiExport} from 'react-icons/bi'
import {FiCalendar} from 'react-icons/fi'
import IconedButton from '../../components/mini/IconedButton'
import Table from '../../components/Table'
import { dummy_table, dummy_table_mapping } from '../../dummy/data'
import './css/Prebooking.css'

function PreBooking() {
  return (
    <div className='Prebooking'>

      <div className='info'>
        <p className='header'>Pre-Bookings</p>
        <div className='buttons'>
          <div className='SearchBox'>
            <BiSearch className='icon' />
            <input type="text" placeholder='Search'/>
          </div>
          <IconedButton icon={<FiCalendar/>} text={"Select Date"} />
          <IconedButton icon={<BiFilterAlt/>} text={"Filter"} />
          <IconedButton icon={<BiExport/>} text={"Export"} />
        </div>
      </div>

      <Table data={dummy_table} mapping={dummy_table_mapping} colored={[1,4]} />

    </div>
  )
}

export default PreBooking