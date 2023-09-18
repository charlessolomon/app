import React, { useState, useRef } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'
import './TruckRequirements.css'

function TruckRequirements() {

    let quantityRef = useRef(null);

    const [open, setOpen] = useState(true);
    const [quantity, setQuantity] = useState(0);

    function handleOpen() {
        setOpen(!open);
    }

    function handleQuantity(dir){
        if(dir>0){
            quantityRef.current.value = quantity+1;
            setQuantity(quantity+1)
        }else{
            if(quantity <= 0) return;
            quantityRef.current.value = quantity-1;
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='TruckRequirements'>

            <div className='header'>
                <h1 className='heading'>Truck Requirements</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>
                <div className='form'>
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Truck Type</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="big_truck">Big Truck</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Truck Tonnage</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="1">1 Ton</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Quantity</p>
                            <div className='input-box'>
                                <input type="text" ref={quantityRef} onChange={()=>{setQuantity(parseInt(quantityRef.current.value))}}/>
                                <BiMinus onClick={()=>{handleQuantity(-1)}} className='value-changer'/>
                                <BiPlus onClick={()=>{handleQuantity(1)}} className='value-changer'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TruckRequirements