import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FileUpload } from '../pages/examples/file-upload'
import Home from '../pages/Home/Home'
import ShoppingCart from '../pages/ShoppingCart'
import PaymentSelect from '../pages/PaymentSelect/PaymentSelect'
import DeliveryPayment from '../pages/Delivery&Payment/Delivery&Payment'

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/example/file-upload" element={<FileUpload />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />

      {/* <Route path="/TestingPage" element={<PaymentSelect />} /> */}
      <Route path="/TestingPage" element={<DeliveryPayment />} />
    </Routes>
  )
}
