import { createSlice } from '@reduxjs/toolkit'

const initialState = {form:{}}

const createBookingSlice = createSlice({
    name: 'createBooking',
    initialState,
    reducers: {},
})

export default createBookingSlice.reducer