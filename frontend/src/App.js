import React from 'react'
import Layout from './components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import AllFoods from './pages/AllFoods'
import AboutPage from './pages/AboutPage'
import Cart from './components/cart/Cart'

const App = () => {
  return (
    <Layout>
       <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<AllFoods />} />
        <Route path='/cart' element={<Cart />} />
       </Routes>
    </Layout>
  )
}

export default App
