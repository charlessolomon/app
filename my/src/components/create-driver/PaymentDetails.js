import React, {useState} from 'react'
import { BiChevronDown } from 'react-icons/bi'
// import LabelledDivider from '../mini/LabelledDivider';
import './PaymentDetails.css';


function PaymentDetails() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="PaymentDetails">
            <div className='header'>
                <h1 className='heading'>Payment Details</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>
                <div className='form'>
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Basic Pay</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Pay Group</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Driver</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Pay Method</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Cash</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Pay Cycle</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Monthly</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Bank Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Account Number</p>
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
export default PaymentDetails
