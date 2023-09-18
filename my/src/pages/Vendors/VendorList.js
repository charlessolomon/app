import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BiFilterAlt} from 'react-icons/bi'
import {BiExport} from 'react-icons/bi'
import {FiCalendar} from 'react-icons/fi'
import {CgAddR} from 'react-icons/cg'
import IconedButton from '../../components/mini/IconedButton'
import Table from '../../components/Table'
import { dummy_table, dummy_table_mapping } from '../../dummy/data'
import './css/VendorList.css'

function VendorList() {
  return (
    <div className='VendorList'>
      <div className='info'>
        <p className='header'>Vendor List</p>
        <div className='buttons'>
          <div className='SearchBox'>
            <BiSearch className='icon' />
            <input type="text" placeholder='Search'/>
          </div>
          <IconedButton icon={<FiCalendar/>} text={"Select Date"} />
          <IconedButton icon={<BiFilterAlt/>} text={"Filter"} />
          <IconedButton icon={<BiExport/>} text={"Export"} />
          <IconedButton className="create-btn" icon={<CgAddR/>} text={"Create"} background={"#19971E"} color={"var(--white)"} borderColor={"#19971E"} />
        </div>
      </div>

      <Table data={dummy_table} mapping={dummy_table_mapping} colored={[1,4]} />
    </div>
  )
}

export default VendorList