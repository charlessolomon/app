import React, {useState} from 'react'
import {BiChevronDown } from 'react-icons/bi'
// import { BiSearch } from 'react-icons/bi'
// import { BiMinus } from 'react-icons/bi'
// import { BiPlus } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
import './FinanceDetails.css';


function FinanceDetails() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="FinanceDetails">
            <div className='header'>
                <h1 className='heading'>Finance Details <span>&nbsp;|&nbsp; Operation Details</span></h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <LabelledDivider title={"Required"} />

                <div className='form'>
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Full Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Mobile No.</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Phone No.</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Email Address</p>
                            <div className='input-box'>
                                <input type="email" />
                            </div>
                        </div>
                    </div>
                    <LabelledDivider title={"Other Details"} />
                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Ext.</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Fax No.</p>
                            <div className='input-box'>
                                <input type="text" placeholder='e.g. 8546545' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinanceDetails
