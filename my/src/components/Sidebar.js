import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BsGrid } from 'react-icons/bs'
import { BsShop } from 'react-icons/bs'
import { BsTruck } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'
import { ImStack } from 'react-icons/im'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbSteeringWheel } from 'react-icons/tb'
import { BiShoppingBag } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { HiOutlineCash } from 'react-icons/hi'
import { MdAttachMoney } from 'react-icons/md'
import './css/Sidebar.css'

function Sidebar() {

    const [bookingOpen, setBookingOpen] = useState(false)
    const [vendorsOpen, setVendorsOpen] = useState(false)
    const [customerOpen, setCustomerOpen] = useState(false)
    const [truckOpen, setTruckOpen] = useState(false)
    const [driverOpen, setDriverOpen] = useState(false)
    const [orderOpen, setOrderOpen] = useState(false)
    const [costOpen, setCostOpen] = useState(false)
    const [clientsOpen, setClientsOpen] = useState(false)
    const [userOpen, setUserOpen] = useState(false)

    const makeAllFalse = () => {
        setBookingOpen(false)
        setVendorsOpen(false)
        setCustomerOpen(false)
        setTruckOpen(false)
        setDriverOpen(false)
        setOrderOpen(false)
        setCostOpen(false)
        setClientsOpen(false)
        setUserOpen(false)
    }

    const handleClick = (component) => {
        switch (component) {
            case 'booking':
                makeAllFalse();
                setBookingOpen(!bookingOpen);
                break;
            case 'vendors':
                makeAllFalse();
                setVendorsOpen(!vendorsOpen);
                break;
            case 'customer':
                makeAllFalse();
                setCustomerOpen(!customerOpen);
                break;
            case 'truck':
                makeAllFalse();
                setTruckOpen(!truckOpen);
                break;
            case 'driver':
                makeAllFalse();
                setDriverOpen(!driverOpen);
                break;
            case 'order':
                makeAllFalse();
                setOrderOpen(!orderOpen);
                break;
            case 'cost':
                makeAllFalse();
                setCostOpen(!costOpen);
                break;
            case 'clients':
                makeAllFalse();
                setClientsOpen(!clientsOpen);
                break;
            case 'user':
                makeAllFalse();
                setUserOpen(!userOpen);
                break;
            default:
                break;
        }
    }

    return (
        <div className='Sidebar'>
            <div className='content'>
                <div className='item'>
                    <Link to="/">
                        <div className='label'>
                            <p><BsGrid className='icon' />Dashboard</p>
                        </div>
                    </Link>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('booking')}
                        style={{
                            background: bookingOpen ? "var(--blue)" : "inherit",
                            color: bookingOpen ? "white" : "inherit",
                        }}
                    >
                        <p><ImStack className='icon' />Booking</p>
                        <IoMdArrowDropdown />
                    </div>
                    <div className='children' style={{ display: bookingOpen ? "block" : "none" }}>
                        <Link to="/create-booking"><p>Create Booking</p></Link>
                        <Link to="/pre-booking"><p>Pre-Booking</p></Link>
                        <Link to="/manage-booking"><p>Manage Booking</p></Link>
                        <Link to="/bulk-booking"><p>Bulk Booking</p></Link>
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('vendors')}
                        style={{
                            background: vendorsOpen ? "var(--blue)" : "inherit",
                            color: vendorsOpen ? "white" : "inherit",
                        }}
                    >
                        <p><BsShop className="icon" />Vendors & Suppliers</p>
                        <IoMdArrowDropdown />
                    </div>
                    <div className='children' style={{ display: vendorsOpen ? "block" : "none" }}>
                        <Link to="/create-vendor"><p>Create Vendor</p></Link>
                        <Link to="/vendor-list"><p>Vendor List</p></Link>
                        <Link to="/create-supplier"><p>Create Supplier</p></Link>
                        <Link to="/supplier-list"><p>Supplier List</p></Link>
                        <Link to="/supplier-report"><p>Supplier Report</p></Link>
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('customer')}
                        style={{
                            background: customerOpen ? "var(--blue)" : "inherit",
                            color: customerOpen ? "white" : "inherit",
                        }}
                    >
                        <p><AiOutlineShoppingCart className='icon' />Customer Management</p>
                        <IoMdArrowDropdown />
                    </div>
                    <div className='children' style={{ display: customerOpen ? "block" : "none" }}>
                        <Link to="/create-customer"><p>Create Customer</p></Link>
                        <p>Customer List</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('truck')}
                        style={{
                            background: truckOpen ? "var(--blue)" : "inherit",
                            color: truckOpen ? "white" : "inherit",
                        }}
                    >
                        <p><BsTruck className='icon' />Truck Management</p>
                        <IoMdArrowDropdown />
                    </div>
                    <div className='children' style={{ display: truckOpen ? "block" : "none" }}>
                        <Link to="/create-truck"><p>Create Truck</p></Link>
                        <p>Truck List</p>
                        <p>Truck Report</p>
                        <p>Fuel Maintenance</p>
                        <p>Truck Maintenance</p>
                        <p>Create Truck Maintenance</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('driver')}
                        style={{
                            background: driverOpen ? "var(--blue)" : "inherit",
                            color: driverOpen ? "white" : "inherit",
                        }}
                    >
                        <p><TbSteeringWheel className='icon' />Driver Management</p>
                        <IoMdArrowDropdown />
                    </div>
                    <div className='children' style={{ display: driverOpen ? "block" : "none" }}>
                        <Link to="/create-driver"><p>Create Driver</p></Link>
                        <Link to="/create-booking"><p>Driver List</p></Link>
                        <Link to="/create-booking"><p>Driver Trip Details</p></Link>
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('order')}
                        style={{
                            background: orderOpen ? "var(--blue)" : "inherit",
                            color: orderOpen ? "white" : "inherit",
                        }}
                    >
                        <p><BiShoppingBag className='icon' />Order Booking</p>
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('cost')}
                        style={{
                            background: costOpen ? "var(--blue)" : "inherit",
                            color: costOpen ? "white" : "inherit",
                        }}
                    >
                        <p><HiOutlineCash className='icon' />Cost Management</p>
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <div className='item'>
                    <div className='label'>
                        <p><BsQuestionCircle className='icon' />Support</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('clients')}
                        style={{
                            background: clientsOpen ? "var(--blue)" : "inherit",
                            color: clientsOpen ? "white" : "inherit",
                        }}
                    >
                        <p><MdAttachMoney className='icon' />Clients & Invoices</p>
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <div className='item'>
                    <div className='label'
                        onClick={() => handleClick('user')}
                        style={{
                            background: userOpen ? "var(--blue)" : "inherit",
                            color: userOpen ? "white" : "inherit",
                        }}
                    >
                        <p><BiUser className='icon' />User Management</p>
                        <IoMdArrowDropdown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar