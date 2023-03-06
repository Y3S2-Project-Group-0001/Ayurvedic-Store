import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FileUpload } from '../pages/examples/file-upload'
import Home from '../pages/Home/Home'
import ShoppingCart from '../pages/ShoppingCart'
import PaymentSelect from '../pages/PaymentSelect/PaymentSelect'



import MainLayout from '../pages/MainLayout'
import DashboardLayout from '../pages/DashboardLayout'
// import CustomerDashBoard from "../pages/customer-dashboard/dashboard";
// import ShoppingCart from '../pages/ShoppingCart copy'


export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/example/file-upload" element={<FileUpload />} />
      <Route path="/TestingPage" element={<PaymentSelect />} />


     

      <Route path="/customer" element={<MainLayout />}>
        <Route path="/customer/shoppingCart" element={<ShoppingCart />}></Route>
        <Route path="/customer/dashBoard" element={<DashboardLayout />}>
          <Route
            path="/customer/dashBoard/orderHistory"
            element={<ShoppingCart />}
          ></Route>
        </Route>
      </Route>

    </Routes>
  )
}
