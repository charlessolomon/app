import { Routes, Route } from "react-router-dom";
import './App.css';

import Protected from "./components/security/Protected";
import Page from "./components/framework/Page";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import CreateBooking from "./pages/Booking/CreateBooking";
import PreBooking from "./pages/Booking/PreBooking";
import BulkBooking from "./pages/Booking/BulkBooking";
import ManageBooking from "./pages/Booking/ManageBooking";


import CreateVendor from "./pages/Vendors/CreateVendor";
import VendorList from "./pages/Vendors/VendorList";
import CreateSupplier from "./pages/Vendors/CreateSupplier";
import SupplierList from "./pages/Vendors/SupplierList";
import SupplierReport from "./pages/Vendors/SupplierReport";

import CreateDriver from "./pages/Drivers/CreateDriver";
import CreateCustomer from "./pages/Customer/CreateCustomer";
import CreateTruck from "./pages/Truck/CreateTruck";

function App() {






  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Protected><Page><Dashboard /></Page></Protected>} />
        <Route path="/login" element={<Login />} />

        <Route path="/create-booking" element={<Protected><Page><CreateBooking /></Page></Protected>} />
        <Route path="/pre-booking" element={<Protected><Page><PreBooking /></Page></Protected>} />
        <Route path="/manage-booking" element={<Protected><Page><ManageBooking /></Page></Protected>} />
        <Route path="/bulk-booking" element={<Protected><Page><BulkBooking /></Page></Protected>} />

        <Route path="/create-vendor" element={<Protected><Page><CreateVendor /></Page></Protected>} />
        <Route path="/vendor-list" element={<Protected><Page><VendorList /></Page></Protected>} />
        <Route path="/create-supplier" element={<Protected><Page><CreateSupplier /></Page></Protected>} />
        <Route path="/supplier-list" element={<Protected><Page><SupplierList /></Page></Protected>} />
        <Route path="/supplier-report" element={<Protected><Page><SupplierReport /></Page></Protected>} />

        <Route path="/create-driver" element={<Protected><Page><CreateDriver /></Page></Protected>} />
        <Route path="/create-customer" element={<Protected><Page><CreateCustomer /></Page></Protected>} />
        <Route path="/create-truck" element={<Protected><Page><CreateTruck /></Page></Protected>} />
      </Routes>
    </div>
  );








  //
}

export default App;