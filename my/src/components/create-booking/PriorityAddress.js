import React, { useState } from 'react'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import './PriorityAddress.css'

function PriorityAddress() {

    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }


    return (
        <div className='PriorityAddress'>
            <div className='header'>
                <h1 className='heading'>Priority Address</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>
                <div className='form'>

                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Priority Address</p>
                            <div className='input-box'>
                                <input type="text" />
                                <BiSearch className='icon' />
                            </div>
                        </div>
                    </div>

                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Address Included based on Priorities</p>
                            <div className='data'>
                                <div className='item'>
                                    <div className='data-content'>
                                        <p className='number'>3</p>
                                        <p className='address-data'>(P) SHOPEE SOC PCH, c35374, SELANGOR & FEDERAL TERRITORY, PUCHONG, 47100.</p>
                                    </div>
                                    <div className='controls'>
                                        <BsArrowUp className='icon' />
                                        <BsArrowDown className='icon' />
                                        <MdClose className='icon' />
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='data-content'>
                                        <p className='number'>2</p>
                                        <p className='address-data'>(P) SHOPEE SOC PCH, c35374, SELANGOR & FEDERAL TERRITORY, PUCHONG, 47100.</p>
                                    </div>
                                    <div className='controls'>
                                        <BsArrowUp className='icon' />
                                        <BsArrowDown className='icon' />
                                        <MdClose className='icon' />
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='data-content'>
                                        <p className='number'>1</p>
                                        <p className='address-data'>(P) SHOPEE SOC PCH, c35374, SELANGOR & FEDERAL TERRITORY, PUCHONG, 47100.</p>
                                    </div>
                                    <div className='controls'>
                                        <BsArrowUp className='icon' />
                                        <BsArrowDown className='icon' />
                                        <MdClose className='icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Route Distance</p>
                            <div className='input-box'>
                                <input type="text" />
                                <select defaultValue="km" className='add-input'>
                                    <option value="km">KM</option>
                                    <option value="mile">Mile</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <div className='input-box check-boxes'>
                                <div className='utility'>
                                    <input type="checkbox" name='pickup' />
                                    <label htmlFor="pickup">Pickup/Internal Movement</label>
                                </div>
                                <div  className='utility'>
                                    <input type="checkbox" name='notifications' />
                                    <label htmlFor="notifications">Send Notification</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PriorityAddress