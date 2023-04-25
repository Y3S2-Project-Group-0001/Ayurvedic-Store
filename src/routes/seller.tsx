import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/AddProducts/AddProduct'
import ProductsPageSeller from '../pages/ProductsPage_Seller/ProductsPageSeller'
import UpdateProductForm from '../pages/UpdateProduct/UpdateProductForm'

export default function SellerRouter() {
  return (
    <Routes>
      <Route path="/addProduct" element={<AddProduct />} />

      <Route path="/allProductSeller" element={<ProductsPageSeller />} />

      <Route path="/updateProduct/:id" element={<UpdateProductForm />} />
    </Routes>
  )
}
