import React from 'react'
import './css/CreateDriver.css'
import Button from '../../components/mini/Button'
import CreateDriverForm from '../../components/create-driver/CreateDriverForm'
import Permissions from '../../components/create-driver/Permissions'
import UserPassword from '../../components/create-driver/UserPassword'
import PaymentDetails from '../../components/create-driver/PaymentDetails'
import AddressDetails from '../../components/create-driver/AddressDetails'

function CreateDriver() {
    return (
        <div className="CreateDriver">
            <CreateDriverForm/>
            <PaymentDetails/>
            <AddressDetails/>
            <Permissions/>
            <UserPassword/>
            <div className='buttons-main'>
                <div className='right'>
                <Button className='cancel' label={"Cancel"} color={"#868686"} borderColor={"#868686"} />
                <Button className='submit' margin={"0px 0px 0px 20px"} color={"var(--white)"} background={"var(--blue)"} label={"Save"} />
                </div>
            </div>
        </div>
    )
}
export default CreateDriver