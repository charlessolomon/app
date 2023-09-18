import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import './PackageDetails.css'

function PackageDetails() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }


    return (
        <div className='PackageDetails'>
            <div className='header'>
                <div className='heading'>
                    <h1>Package Details</h1>
                    <p>(Optional)</p>
                </div>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>
                <div className='form'>

                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Delivery Type 1</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="D1">D1</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Delivery Type 2</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="D2">D2</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Customer Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Item Code </p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Goods Description</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Shipping/DO Ref No. </p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Package Type</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="carton">Carton</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PackageDetails