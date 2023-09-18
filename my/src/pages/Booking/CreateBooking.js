import React from 'react'
import './css/CreateBooking.css'
import CreateBookingForm from '../../components/create-booking/CreateBookingForm'
import PickupDeliveryForm from '../../components/create-booking/PickupDeliveryForm'
import TruckRequirements from '../../components/create-booking/TruckRequirements'
import AssignTruckDriver from '../../components/create-booking/AssignTruckDriver'
import PriorityAddress from '../../components/create-booking/PriorityAddress'
import OtherCharges from '../../components/create-booking/OtherCharges'
import PackageDetails from '../../components/create-booking/PackageDetails'
import Button from '../../components/mini/Button'

function CreateBooking() {
  return (
    <div className='CreateBooking'>
      <CreateBookingForm />
      <PickupDeliveryForm />
      <TruckRequirements />
      <AssignTruckDriver />
      <PriorityAddress />
      <OtherCharges />
      <PackageDetails />
      <div className='buttons-main'>
        <div className='left'>
          <Button className='draft' label={"Save Draft"} />
        </div>
        <div className='right'>
          <Button className='cancel' label={"Cancel"} color={"#868686"} borderColor={"#868686"} />
          <Button className='submit' margin={"0px 0px 0px 20px"} color={"var(--white)"} background={"var(--blue)"} label={"Create Booking"} />
        </div>
      </div>
    </div>
  )
}

export default CreateBooking