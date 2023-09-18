import React from 'react'
import './css/CreateSupplier.css'
import Button from '../../components/mini/Button'
import CreateSupplierForm from '../../components/create-vendor/CreateSupplierForm'
import AddressDetails1 from '../../components/create-vendor/AddressDetails1'
import BankDetails from '../../components/create-vendor/BankDetails'
import BusinessDetails1 from '../../components/create-vendor/BusinessDetails1'
import FinanceDetails from '../../components/create-vendor/FinanceDetails'

function CreateVendor() {
  return (
    <div className='CreateVendor'>
        <CreateSupplierForm/>
        <AddressDetails1/>
        <BusinessDetails1/>
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