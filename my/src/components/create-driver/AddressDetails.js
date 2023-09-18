import React, {useState} from 'react'
import {BiChevronDown } from 'react-icons/bi'
// import { BiSearch } from 'react-icons/bi'
// import { BiMinus } from 'react-icons/bi'
// import { BiPlus } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
import './AddressDetails.css';


function AddressDetails() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="AddressDetails">
            <div className='header'>
                <h1 className='heading'>Address Details</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <LabelledDivider title={"Required"} />

                <div className='form'>
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Address Line 1</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Zone</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Central</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Address Line 2</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>City</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Rembau</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>State</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Negri Sembilan</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Country</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Malaysia</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Postal Code</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='row row-4'>
                        <div className='input-field last-line'>
                            <p className='label'>Emergency Contact Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field last-line'>
                            <p className='label'>Emergency Contact No.</p>
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
export default AddressDetails
