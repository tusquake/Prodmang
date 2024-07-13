import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
      </Routes>
    </div>
  )
}

export default App
