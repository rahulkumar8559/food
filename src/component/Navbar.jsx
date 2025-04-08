import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
const Navbar = ({setShowLogin ,setProfileLogo,profileLogo}) => {

  


  const [menu,setMenu]=useState();
  const {getTotalCartAmount,Searchdata,setName,name}=useContext(StoreContext)

  const handleSearchValue=(e)=>{
    const value= e.target.value;
    console.log(name)
    setName(value);
    Searchdata(value);
  }
  
  return (
    <div className='flex justify-between items-center  p-[20px]'>
        <Link to='/' onClick={()=>setMenu('home')} > <img src={assets.logo } alt="" className='w-[150px] lg:w-[140px]' /></Link>
        <ul className='flex gap-[20px] text-[#49557e] lg:text-[17px] text-[18px] hidden  md:block md:flex sm:hidden'>
            <Link to='/' onClick={()=>setMenu('home')} className={`cursor-pointer ${menu==='home'?'underline underline-offset-1':''} `}  >Home</Link>
            <Link to='/menu' onClick={()=>setMenu('menu')} className={`cursor-pointer ${menu==='menu'?'underline underline-offset-1':''} `}>Menu</Link>
            <Link to='/mobile' onClick={()=>setMenu('mobile-app')} className={`cursor-pointer ${menu==='mobile-app'?'underline underline-offset-1':''} `}>Mobile-App</Link>
            <Link to='footer' onClick={()=>setMenu('contact-us')} className={`cursor-pointer ${menu==='contact-us'?'underline underline-offset-1':''} `} >Contact us</Link>
        </ul>
        <div className='flex items-center lg:gap-[30px] gap-[40px]'>
          <div className='flex border-[1px] rounded-[10px] p-[2px] border-black'>
           <img src={assets.search_icon} alt="" className=' cursor-pointer ' />
           <input onChange={handleSearchValue} type="text" className='outline-none rounded-[12px] pl-[5px]' /> 
           
           </div>
            <div className='flex items-center relative'>
                <Link to='/cart' onClick={()=>setMenu("")} > <img src={assets.basket_icon} alt="" className='cursor-pointer lg:w-[22px]' /> </Link>
                <div className={getTotalCartAmount()===0?"":'absolute text-red-500 h-[10px] w-[10px] bg-red-500 rounded-[50%] right-[-8px] top-[-8px]'}></div>
            </div>
            {
              profileLogo?
              <img src={assets.profile_icon} alt="" />:

            <button onClick={()=>setShowLogin(true)} className='bg-transparent text-[16px] text-[#49557e] border-2 border-red-200 pl-[10px] pr-[10px] rounded-[50px] duration-[0.5s] hover:bg-[#fff4f2] lg:py-[8px] lg:px-[25px]'>sign-in</button>

          }
        </div>
    </div>
  ) 
}

export default Navbar;