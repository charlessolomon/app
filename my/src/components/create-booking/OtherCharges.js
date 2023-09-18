import React, { useState, useRef } from 'react'
import { BiChevronDown, BiMinus, BiPlus } from 'react-icons/bi'
import './OtherCharges.css'

function OtherCharges() {

    let quantityRef = useRef(null);
    let priceRef = useRef(null);
    let manRef = useRef(null);

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [man, setMan] = useState(0);

    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }

    function handleQuantity(dir) {
        if (dir > 0) {
            quantityRef.current.value = quantity + 1;
            setQuantity(quantity + 1)
        } else {
            if (quantity <= 0) return;
            quantityRef.current.value = quantity - 1;
            setQuantity(quantity - 1)
        }
    }


    function handlePrice(dir) {
        if (dir > 0) {
            priceRef.current.value = price + 1;
            setPrice(price + 1)
        } else {
            if (price <= 0) return;
            priceRef.current.value = price - 1;
            setPrice(price - 1)
        }
    }

    function handleMan(dir) {
        if (dir > 0) {
            manRef.current.value = man + 1;
            setMan(man + 1)
        } else {
            if (man <= 0) return;
            manRef.current.value = man - 1;
            setMan(man - 1)
        }
    }


    return (
        <div className='OtherCharges'>
            <div className='header'>
                <h1 className='heading'>Other Charges</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>
                <div className='form'>
                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Other Charges Type</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="new_charge">New Charge</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Quantity</p>
                            <div className='input-box'>
                                <input type="text" ref={quantityRef} onChange={() => { setQuantity(parseInt(quantityRef.current.value)) }} />
                                <BiMinus onClick={() => { handleQuantity(-1) }} className='value-changer' />
                                <BiPlus onClick={() => { handleQuantity(1) }} className='value-changer' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Price</p>
                            <div className='input-box'>
                                <input type="text" ref={priceRef} onChange={() => { setPrice(parseInt(priceRef.current.value)) }} />
                                <BiMinus onClick={() => { handlePrice(-1) }} className='value-changer' />
                                <BiPlus onClick={() => { handlePrice(1) }} className='value-changer' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Total</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Man Power</p>
                            <div className='input-box'>
                                <input type="text" ref={manRef} onChange={() => { setMan(parseInt(manRef.current.value)) }} />
                                <BiMinus onClick={() => { handleMan(-1) }} className='value-changer' />
                                <BiPlus onClick={() => { handleMan(1) }} className='value-changer' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Other Requirements</p>
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

export default OtherCharges