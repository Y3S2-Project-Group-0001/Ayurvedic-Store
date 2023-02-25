import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FileUpload } from '../pages/examples/file-upload'
import Home from '../pages/Home'
import ShoppingCart from '../pages/ShoppingCart'

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/example/file-upload" element={<FileUpload />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
  )
}
