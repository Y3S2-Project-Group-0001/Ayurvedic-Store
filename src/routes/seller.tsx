import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/AddProducts/AddProduct'

export default function SellerRouter() {
  return (
    <Routes>
      <Route path="/addProduct" element={<AddProduct />} />
    </Routes>
  )
}
