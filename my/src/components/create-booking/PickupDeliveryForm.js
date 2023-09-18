import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import './PickupDeliveryForm.css'
import LabelledDivider from '../mini/LabelledDivider';

function PickupDeliveryForm() {

    const [open, setOpen] = useState(true);
    const [pickupOpen, setPickup] = useState(true);
    const [deliveryOpen, setDelivery] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    function handleClick(option) {
        switch(option){
            case 'pickup':
                setDelivery(false)
                setPickup(true)
                break;
            case 'delivery':
                setPickup(false)
                setDelivery(true)
                break;
            default:
                break;
        }
    }

    return (
        <div className='PickupDeliveryForm'>

            <div className='header'>
                <div className='heading'>
                    <h1 onClick={() => handleClick('pickup')}
                        style={{
                            color: pickupOpen ? "var(--blue)" : "inherit",
                        }}>Pickup</h1>
                    <h1>|</h1> 
                    <h1 onClick={() => handleClick('delivery')}
                        style={{
                            color: deliveryOpen ? "var(--blue)" : "inherit",
                        }}>Delivery</h1>
                </div>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <div className='form pickup' style={{ display: pickupOpen ? "block" : "none" }}>

                    <LabelledDivider title={"Required"} />

                    <div className='row row-1'>

                        <div className='input-field'>
                            <p className='label'>Consingner Pickup</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>PIC Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>PIC Phone</p>
                            <div className='input-box'>
                                <input type="tel" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>PIC Email</p>
                            <div className='input-box'>
                                <input type="email" />
                            </div>
                        </div>
                    </div>


                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Address Line 1</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Address Line 2</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Region</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="texas">Texas</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Country</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="india">India</option>
                                </select>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>State</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="kerala">Kerala</option>
                                </select>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>City</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="palakkad">Palakkad</option>
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

                    <LabelledDivider title={"Other Details"} />


                    <div className='row row-4'>
                        <div className='input-field'>
                            <p className='label'>Remarks</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Pickup Date</p>
                            <div className='input-box'>
                                <input type="date" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Pickup Time</p>
                            <div className='input-box'>
                                <input type="time" />
                            </div>
                        </div>
                    </div>

                    <div className='row row-5'>
                        <div className='input-field'>
                            <p className='label'>Add Geolocation</p>
                            <div className='input-box'>
                                <div className='option'>
                                    <input type="radio" id="yes" name="geolocation" value="Yes" />
                                    <label htmlFor="geolocation">Yes</label>
                                </div>
                                <div className='option'>
                                    <input type="radio" id="no" name="geolocation" value="No" />
                                    <label htmlFor="geolocation">No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='form delivery' style={{ display: deliveryOpen ? "block" : "none" }}>

                    <LabelledDivider title={"Required"} />

                    <div className='row row-1'>

                        <div className='input-field'>
                            <p className='label'>Consingner Delivery</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>PIC Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>PIC Phone</p>
                            <div className='input-box'>
                                <input type="tel" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>PIC Email</p>
                            <div className='input-box'>
                                <input type="email" />
                            </div>
                        </div>
                    </div>


                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Address Line 1</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Address Line 2</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Region</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="texas">Texas</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Country</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="india">India</option>
                                </select>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>State</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="kerala">Kerala</option>
                                </select>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>City</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="palakkad">Palakkad</option>
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

                    <LabelledDivider title={"Other Details"} />


                    <div className='row row-4'>
                        <div className='input-field'>
                            <p className='label'>Remarks</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Delivery Date</p>
                            <div className='input-box'>
                                <input type="date" />
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Delivery Time</p>
                            <div className='input-box'>
                                <input type="time" />
                            </div>
                        </div>
                    </div>

                    <div className='row row-5'>
                        <div className='input-field'>
                            <p className='label'>Add Geolocation</p>
                            <div className='input-box'>
                                <div className='option'>
                                    <input type="radio" id="yes" name="geolocation" value="Yes" />
                                    <label htmlFor="geolocation">Yes</label>
                                </div>
                                <div className='option'>
                                    <input type="radio" id="no" name="geolocation" value="No" />
                                    <label htmlFor="geolocation">No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PickupDeliveryForm