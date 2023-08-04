import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import BaseLayout from './components/layout/BaseLayout'
import AdminLayoutPage from './components/layout/AdminLayoutPage'
import HomePage from './pages/HomePage'
import { ICategory, IProduct } from './interface/product'
import { getAddProduct, getAll, getUpdateProduct, getdelete } from './api/product'
import ProductDetaliPage from './pages/ProductDetailPage'
import SigninPage from './pages/SigninPage'
import AddPage from './components/product/AddPage'
import AdminHomePage from './pages/admin/product/AdminHomePage'
import UpdatePage from './components/product/UpdatePage'
import SignUpPage from './pages/SignUpPage'
import { getAddCategory, getAllCategory, getUpdateCategories, getdeleteCategory } from './api/category'
import CategoriesHome from './pages/admin/category/AdminCategoryHome'
import CategoriesAdd from './components/category/CategoriesAdd'
import CategoriesUpdate from './components/category/CategoriesUpdate'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AllProductPage from './pages/AllProductPage'
import AdminUserHome from './pages/admin/user/AdminUserHome'


function App() {
  return (
    <>
      <Routes>
        <Route path='signup' element={<SignUpPage />} />
        <Route path='signin' element={<SigninPage />} />

        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='products' element={<AllProductPage />} />
          <Route path='products/:id'  >
            <Route index element={<ProductDetaliPage />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
        </Route>
        {/* admin */}
        <Route path='/admin' element={<AdminLayoutPage />}>
          <Route index element={<AdminHomePage />} />
          <Route path='add' element={<AddPage />} />
          <Route path='update/:id' element={<UpdatePage />} />
          <Route path='categories'>
            <Route index element={<CategoriesHome />} />
            <Route path='add' element={<CategoriesAdd />} />
            <Route path='update/:id' element={<CategoriesUpdate />} />
          </Route>
          <Route path='users' >
            <Route index element={<AdminUserHome />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
