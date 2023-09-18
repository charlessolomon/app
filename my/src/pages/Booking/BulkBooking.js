import React from 'react'
import { BiDownload } from 'react-icons/bi'
import { BiExport } from 'react-icons/bi'
import IconedButton from '../../components/mini/IconedButton'
import Table from '../../components/Table'
import { dummy_table, dummy_table_mapping } from '../../dummy/data'
import './css/BulkBooking.css'

function BulkBooking() {
    return (
        <div className='BulkBooking'>
            <div className='info'>
                <p className='header'>Bulk Booking</p>
                <div className='buttons'>
                    <IconedButton icon={<BiDownload />} text={"Download Template"} />
                    {/* <div className="choose-file">
                        <input type="file" />
                    </div> */}
                    <div className='IconedButton special'>
                        <div className='icon'><BiExport /></div>
                        <p className='text'>Upload</p>
                    </div>
                </div>
            </div>

            <Table data={dummy_table} mapping={dummy_table_mapping} colored={[1, 4]} />
        </div>
    )
}

export default BulkBooking