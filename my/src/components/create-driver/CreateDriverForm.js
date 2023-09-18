import React, {useState} from 'react'
import { BiCalendar, BiChevronDown } from 'react-icons/bi'
// import { BiSearch } from 'react-icons/bi'
// import { BiMinus } from 'react-icons/bi'
// import { BiPlus } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
import './CreateDriverForm.css';


function CreateDriverForm() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="CreateDriverForm">
            <div className='header'>
                <h1 className='heading'>Create Driver</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <LabelledDivider title={"Required"} />

                <div className='form'>
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>First Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Last Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>NRIC/Passport No.</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Date of Joining</p>
                            <div className='input-box cal' >
                                <input type="date" />
                                <BiCalendar className='icon' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Department</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Driver</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Role</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Driver</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Date of Birth</p>
                            <div className='input-box'>
                                <input type="date" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Gender</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Male</option>
                                    <option value="default">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Marital Status</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default">Unmarried</option>
                                    <option value="default">Married</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row row-4">
                        <div className='input-field'>
                            <p className='label'>Employee Status</p>
                            <div className='input-box rad'>
                                <div className='option'>
                                    <input type="radio" id="active" name="employee_status" value="Active" />
                                    <label htmlFor="active">Active</label>
                                </div>
                                <div className='option'>
                                    <input type="radio" id="inactive" name="employee_status" value="Inactive" />
                                    <label htmlFor="inactive">Inactive</label>
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Mobile Number</p>
                            <div className='input-box'>
                                <input type="tel" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Work Number</p>
                            <div className='input-box'>
                                <input type="tel" />
                            </div>
                        </div>
                    </div>
                    <div className="row row-5">
                        <div className='input-field'>
                            <p className='label'>Email Address</p>
                            <div className='input-box'>
                                <input type="email" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>SOC SO Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row row-6">
                        <div className='input-field'>
                            <p className='label'>DL Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>DL Expiry</p>
                            <div className='input-box cal'>
                                <input type="date" />
                                <BiCalendar className='icon' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>EPF Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <LabelledDivider title={"Other Details"} />
                    <div className="row row-7">
                        <div className='input-field'>
                            <p className='label'>Ext</p>
                            <div className='input-box'>
                                <input type="text" placeholder="e.g 545"/>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Skype ID</p>
                            <div className='input-box'>
                                <input type="text" placeholder="e.g 8546545"/>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Employee ID</p>
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
export default CreateDriverForm