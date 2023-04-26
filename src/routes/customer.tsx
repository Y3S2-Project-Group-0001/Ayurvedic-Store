import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FileUpload } from '../pages/examples/file-upload'
import Home from '../pages/Home/Home'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import PaymentSelect from '../pages/PaymentSelect/PaymentSelect'

import MainLayout from '../pages/MainLayout'
import DashboardLayout from '../pages/DashboardLayout'
import OrderHistory from '../pages/OrderHistory'
// import CustomerDashBoard from "../pages/customer-dashboard/dashboard";
// import ShoppingCart from '../pages/ShoppingCart copy'

import ProductsPage from '../pages/ProductsPage_Customer/ProductsPage'
import ViewOrderCustomer from '../pages/ViewOrderCustomer/ViewOrderCustomer'

import Delivery from '../pages/Delivery/Delivery'
import SingleProduct from '../pages/ProductsPage_Customer/SingleProduct'

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/example/file-upload" element={<FileUpload />} />

      <Route path="/payment" element={<PaymentSelect />} />

      <Route path="/TestingPage2" element={<Delivery />} />

      {/* <Route path="/TestingPage" element={<PaymentSelect />} /> */}
      <Route path="/TestingPage" element={<DeliveryPayment />} />

      <Route path="/singleProduct/:_id" element={<SingleProduct />} />

      <Route path="/allProductsCustomer" element={<ProductsPage />} />
      <Route path="/customer" element={<MainLayout />}>
        <Route
          path="/customer/allProductsCustomer"
          element={<ProductsPage />}
        />
        <Route path="/customer/shoppingCart" element={<ShoppingCart />}></Route>
        <Route path="/customer/dashBoard" element={<DashboardLayout />}>
          <Route
            path="/customer/dashBoard/orderHistory"
            element={<OrderHistory />}
          ></Route>
          <Route
            path="/customer/dashBoard/viewOrder"
            element={<ViewOrderCustomer />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  )
}
