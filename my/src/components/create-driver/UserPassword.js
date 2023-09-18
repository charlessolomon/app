import React, {useState} from 'react'
import { BiChevronDown } from 'react-icons/bi'
import './UserPassword.css';


function UserPassword() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="UserPassword">
            <div className='header'>
                <h1 className='heading'>User Password</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <div className='form'>
                    <div className="row row-4">
                        <div className='input-field'>
                            <p className='label'>Password</p>
                            <div className='input-box'>
                                <input type="password" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Confirm Password</p>
                            <div className='input-box'>
                                <input type="password" className="pass"/>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Send Password</p>
                            <div className='input-box rad'>
                                <div className='option'>
                                    <input type="radio" id="yes" name="send_password" value="Yes" />
                                    <label htmlFor="yes">Yes</label>
                                </div>
                                <div className='option'>
                                    <input type="radio" id="no" name="send_password" value="No" />
                                    <label htmlFor="no">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserPassword