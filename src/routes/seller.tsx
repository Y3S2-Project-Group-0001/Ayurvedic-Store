import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/AddProducts/AddProduct'
import UpdateProduct from '../pages/UpdateProduct/UpdateProduct'

export default function SellerRouter() {
  return (
    <Routes>
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/updateProduct" element={<UpdateProduct />} />
    </Routes>
  )
}
