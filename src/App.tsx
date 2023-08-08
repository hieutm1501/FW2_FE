import { Routes, Route } from "react-router-dom"
import BaseLayout from './components/layout/BaseLayout'
import AdminLayoutPage from './components/layout/AdminLayoutPage'
import HomePage from './pages/HomePage'
import ProductDetaliPage from './pages/ProductDetailPage'
import SigninPage from './pages/SigninPage'
import AddPage from './components/product/AddPage'
import AdminHomePage from './pages/admin/product/AdminHomePage'
import UpdatePage from './components/product/UpdatePage'
import SignUpPage from './pages/SignUpPage'
import CategoriesHome from './pages/admin/category/AdminCategoryHome'
import CategoriesAdd from './components/category/CategoriesAdd'
import CategoriesUpdate from './components/category/CategoriesUpdate'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AllProductPage from './pages/AllProductPage'
import AdminUserHome from './pages/admin/user/AdminUserHome'
import BillClient from './pages/bill/BillClient'
import BillLayout from './components/layout/BillLayout'
import Pading from "./pages/bill/Pading"
import Delivering from "./pages/bill/Delivering"
import Received from "./pages/bill/Received"
import BillAdminHome from "./pages/admin/bill/BillAdminHome"
import UpdateBill from "./pages/admin/bill/UpdateBill"


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
          <Route path='products/:id'>
            <Route index element={<ProductDetaliPage />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
          {/* BILL */}
          <Route path='bill' element={<BillLayout />} >
            <Route index element={<BillClient />} />
            <Route path='pading' element={<Pading />} />
            <Route path='delivering' element={<Delivering />} />
            <Route path='received' element={<Received />} />
          </Route>
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
          <Route path='bill'>
            <Route index element={<BillAdminHome />} />
            <Route path="update/status/:id" element={<UpdateBill />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
