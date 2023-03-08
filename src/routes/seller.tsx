import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/AddProducts/AddProduct'
import ProductsPage from '../pages/ProductsPage_Seller/ProductsPage'
import UpdateProduct from '../pages/UpdateProduct/UpdateProduct'

export default function SellerRouter() {
  return (
    <Routes>
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/updateProduct" element={<UpdateProduct />} />
      <Route path="/allProductSeller" element={<ProductsPage />} />
    </Routes>
  )
}
