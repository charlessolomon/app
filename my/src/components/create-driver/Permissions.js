import React, {useState} from 'react'
import { BiSearch, BiChevronDown } from 'react-icons/bi'
import './Permissions.css';


function Permissions() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="Permissions">
            <div className='header'>
                <h1 className='heading'>Permissions</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>
                <div className='form'>

                    <div className='permission-field sub-head'>
                        <p className='label-head'>Departments</p>
                        <div className='input-box rad'>
                            <div className='option-head'>
                                <p>View</p>
                            </div>
                            <div className='option-head'>
                                <p>ُEdit</p>
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Driver App</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="driver_app_view" name="driver_app" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="driver_app_edit" name="driver_app" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Vendor & Suppliers</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="vendor_suppliers_view" name="vendor_suppliers" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="vendor_suppliers_edit" name="vendor_suppliers" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Customer Management</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="customer-mngt-view" name="customer-mngt" value="View" />
                                {/* <label htmlFor="driver-app-vietruck-mngt">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="customer-mngt-edit" name="customer-mngt" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
{/* Extrsa --------------------------------------------- permissions  */}
                    {/* <div className="assign_search">
                        <p></p>
                        <div className='search-field'>
                            <input type="text"/>
                            <BiSearch className='icon'/>
                        </div>
                        <ul className='filters'>
                            <li>Shopee</li>
                            <li>Sinotrans Logistics</li>
                            <li>Luico Suppliers</li>
                        </ul>
                    </div> */}

                    <div className='permission-field'>
                        <p className='label'>Truck Management</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="truck-mngt-view" name="truck-mngt" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="truck-mngt-edit" name="truck-mngt" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Driver Management</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="driver-mngt-view" name="driver_mngt" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="driver-mngt-edit" name="driver_mngt" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Order Booking</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="order-booking-view" name="order-booking" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="order-booking-edit" name="order-booking" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Cost Management</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="cost-mngt-view" name="cost-mngt" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="cost-mngt-edit" name="cost-mngt" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Reports</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="reports-view" name="reports" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="reports-edit" name="reports" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    <div className='permission-field'>
                        <p className='label'>Invoice Generator</p>
                        <div className='input-box rad'>
                            <div className='option'>
                                <input type="checkbox" id="invoice-gen-view" name="invoice-gen" value="View" />
                                {/* <label htmlFor="driver-app-view">View</label> */}
                            </div>
                            <div className='option'>
                                <input type="checkbox" id="invoice-gen-edit" name="invoice-gen" value="Edit" />
                                {/* <label htmlFor="driver-app-edit">Edit</label> */}
                            </div>
                        </div>
                    </div>
                    {/* <p>Note: Employees will only receive notifications from vendors &amp; customers with whom
                        they are assigned.
                    </p> */}
                </div>
            </div>
        </div>
    )
}
export default Permissions
