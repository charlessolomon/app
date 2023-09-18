import React, {useState} from 'react'
import { BiChevronDown } from 'react-icons/bi'
// import { BiSearch } from 'react-icons/bi'
// import { BiMinus } from 'react-icons/bi'
// import { BiPlus } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
import './CreateSupplierForm.css';


function CreateSupplierForm() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className="CreateSupplierForm">
            <div className='header'>
                <h1 className='heading'>Create Supplier</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <LabelledDivider title={"Required"} />

                <div className='form'>
                    <div className="row row-1">
                        <div className='input-field'>
                            <p className='label'>Business Name</p>
                            <div className='input-box'>
                                <input type="email" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Supplier ID</p>
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
export default CreateSupplierForm