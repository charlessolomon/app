import React, {useState} from 'react'
import { BiCalendar, BiChevronDown } from 'react-icons/bi'
// import { BiSearch } from 'react-icons/bi'
// import { BiMinus } from 'react-icons/bi'
// import { BiPlus } from 'react-icons/bi'
// import LabelledDivider from '../mini/LabelledDivider';
import './TruckDetails.css';


function TruckDetails() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="TruckDetails">
            <div className='header'>
                <h1 className='heading'>Truck Details</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <div className='form'>
                    <p className='add-others'>Add Other Expire</p>                    
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Insurance Expire</p>
                            <div className="input-box-container">
                                <div className='input-box cal' >
                                    <input type="date" />
                                    <BiCalendar className='icon' />
                                </div>
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Inspection Expire</p>
                            <div className="input-box-container">
                                <div className='input-box cal' >
                                    <input type="date" />
                                    <BiCalendar className='icon' />
                                </div>
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Permit Expire</p>
                            <div className="input-box-container">
                                <div className='input-box cal' >
                                    <input type="date" />
                                    <BiCalendar className='icon' />
                                </div>
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Custom Bond Expire</p>
                            <div className="input-box-container">
                                <div className='input-box cal' >
                                    <input type="date" />
                                    <BiCalendar className='icon' />
                                </div>
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Fitness Certificate Expire</p>
                            <div className="input-box-container">
                                <div className='input-box cal' >
                                    <input type="date" />
                                    <BiCalendar className='icon' />
                                </div>
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>License Expire</p>
                            <div className="input-box-container">
                            <div className='input-box cal' >
                                <input type="date" />
                                <BiCalendar className='icon' />
                            </div>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='row row-4'>
                        <div className='input-field'>
                            <p className='label'>Truck Length</p>
                            <div className="input-box-container">
                                <div className='input-box'>
                                    <input type="text"/>
                                </div>
                                <div className='input-box'>
                                    <select defaultValue="default">
                                        <option value="default">CM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Truck Width</p>
                            <div className="input-box-container">
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                                <div className='input-box'>
                                    <select defaultValue="default">
                                        <option value="default">CM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-5">
                        <div className='input-field'>
                            <p className='label'>Truck Height</p>
                            <div className="input-box-container">
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                                <div className='input-box'>
                                    <select defaultValue="default">
                                        <option value="default">CM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row row-6'>
                        <div className='input-field'>
                            <p className='label'>Summon Expire</p>
                            <div className="input-box-container">
                                <div className='input-box cal' >
                                    <input type="date" />
                                    <BiCalendar className='icon' />
                                </div>
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Max Weight in KGs</p>
                            <div className="input-box-container">
                                <div className='input-box'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TruckDetails