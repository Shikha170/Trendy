import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import ItemDetails from './pages/itemDetails/itemDetails'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/:itemName' element={<ItemDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
