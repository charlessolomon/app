import React from 'react'
import './css/CreateVendor.css'
import Button from '../../components/mini/Button'
import CreateVendorForm from '../../components/create-vendor/CreateVendorForm'
import AddressDetails1 from '../../components/create-vendor/AddressDetails1'
import BankDetails from '../../components/create-vendor/BankDetails'
import BusinessDetails from '../../components/create-vendor/BusinessDetails'
import FinanceDetails from '../../components/create-vendor/FinanceDetails'

function CreateVendor() {
  return (
    <div className='CreateVendor'>
        <CreateVendorForm/>
        <AddressDetails1/>
        <BusinessDetails/>
        <FinanceDetails/>
        <BankDetails/>
        <div className='buttons-main'>
            <div className='right'>
            <Button className='cancel' label={"Cancel"} color={"#868686"} borderColor={"#868686"} />
            <Button className='submit' margin={"0px 0px 0px 20px"} color={"var(--white)"} background={"var(--blue)"} label={"Save"} />
            </div>
        </div>
    </div>

  )
}

export default CreateVendor