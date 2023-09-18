import React from 'react'
import './css/CreateCustomer.css'
import AddressDetails2 from '../../components/create-customer/AddressDetails2'
import ExtraOptions from '../../components/create-customer/ExtraOptions'

function CreateCustomer() {
    return (
        <div className="CreateCustomer">
            <AddressDetails2/>
            <ExtraOptions/>
        </div>
    )
}
export default CreateCustomer