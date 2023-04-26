import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/AddProducts/AddProduct'

import ProductsPageSeller from '../pages/ProductsPage_Seller/ProductsPageSeller'
import UpdateProductForm from '../pages/UpdateProduct/UpdateProductForm'

import MainLayout from '../pages/MainLayout'
import DashboardLayout from '../pages/DashboardLayout'
import Orders from '../pages/Orders'
import ViewOrderAdmin from '../pages/VIewOrderAdmin/ViewOrderAdmin'

export default function SellerRouter() {
  return (
    <Routes>
      <Route path="/addProduct" element={<AddProduct />} />

      <Route path="/allProductSeller" element={<ProductsPageSeller />} />

      <Route path="/updateProduct/:_id" element={<UpdateProductForm />} />

      <Route path="/allProductSeller" element={<ProductsPageSeller />} />

      <Route path="/admin" element={<MainLayout />}>
        <Route
          path="/admin/allProductSeller"
          element={<ProductsPageSeller />}
        />
        <Route path="/admin/dashBoard" element={<DashboardLayout />}>
          <Route path="/admin/dashBoard/orders" element={<Orders />}></Route>
          <Route
            path="/admin/dashBoard/viewOrder"
            element={<ViewOrderAdmin />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  )
}
