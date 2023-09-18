import React, {useState} from 'react'
import { BiChevronDown } from 'react-icons/bi'
import './ExtraOptions.css';


function ExtraOptions() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="ExtraOptions">
            <div className='header'>
                <h1 className='heading'>Extra Options</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>
                <div className='form'>
                    <div className='row row-1'>
                        <div className='option-field'>
                            <div className='option'>
                                <input type="checkbox" id="send-auto-invoice" name="extra-options" value="send-auto-invoice" />
                                <label htmlFor="send-auto-invoice">Send Auto Invoice</label>
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="enable-mail-notifications" name="extra-options" value="enable-mail-notifications" />
                                <label htmlFor="enable-mail-notifications">Enable Mail Notifications</label>
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="pod-mail-details" name="extra-options" value="pod-mail-details" />
                                <label htmlFor="pod-mail-details">POD Mail Details</label>
                            </div>
                        </div>
                    </div>
                    <div className='row row-2'>
                        <div className='option-field'>
                            <div className='option'>
                                <input type="checkbox" id="enable-kpi-reports" name="extra-options" value="enable-kpi-reports" />
                                <label htmlFor="enable-kpi-reports">Enable KPI Reports (Client Portal)</label>
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="enable-whatsapp-notifications" name="extra-options" value="enable-whatsapp-notifications" />
                                <label htmlFor="enable-whatsapp-notifications">Enable Whatsapp Notifications</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ExtraOptions
