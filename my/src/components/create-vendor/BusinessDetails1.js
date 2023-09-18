import React, {useState} from 'react'
import {BiChevronDown } from 'react-icons/bi'
// import { BiSearch } from 'react-icons/bi'
// import { BiMinus } from 'react-icons/bi'
// import { BiPlus } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
import './BusinessDetails1.css';


function BusinessDetails1() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="BusinessDetails1">
            <div className='header'>
                <h1 className='heading'>Business Details</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <LabelledDivider title={"Required"} />

                <div className='form'>
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Name of Business</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Company Registration</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Credit Terms</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Select one</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <LabelledDivider title={"Other Details"} />
                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Website URL</p>
                            <div className='input-box'>
                                <input type="url" />
                            </div>
                        </div>
                        <div className='input-field last-line'>
                            <p className='label'>SST Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BusinessDetails1