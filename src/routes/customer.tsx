import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FileUpload } from '../pages/examples/file-upload'
import Home from '../pages/Home/Home'
import ShoppingCart from '../pages/ShoppingCart'
import PaymentSelect from '../pages/PaymentSelect/PaymentSelect'
// import ShoppingCart from '../pages/ShoppingCart copy'

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/example/file-upload" element={<FileUpload />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />

      <Route path="/TestingPage" element={<PaymentSelect />} />
    </Routes>
  )
}
