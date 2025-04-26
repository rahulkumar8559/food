import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Download from './component/Download'
import ExploreMenu from './component/ExploreMenu'
import Footer from './component/Footer'
import LoginPopup from './component/LoginPopup'
import Navbar from './component/navbar'
import { Cart } from './pages/Cart'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'

function App() {

  const [showLogin,setSetShowLogin]=useState(false);
  const [profileLogo,setProfileLogo]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setSetShowLogin} setProfileLogo={setProfileLogo} />:<></>}
      <div className='w-[85%] m-auto font-poppins'>
        <Navbar setShowLogin={setSetShowLogin} setProfileLogo={setProfileLogo} profileLogo={profileLogo} />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/menu' element={<ExploreMenu />} />
          <Route path='/mobile' element={<Download />} />
          <Route path='/footer' element="" />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App