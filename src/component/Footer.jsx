import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] mt-[100px] p-[8vw] p-[20px] pt-[80px]'>
        <div className='w-[100%] gap-[80px]  block sm:grid' style={{  gridTemplateColumns:"2fr 1fr 1fr" }} >
            <div className='flex flex-col mb-[20px] gap-[20px]  items-start'>
                <img src={assets.logo} alt="" />
                <p className='text-[14px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum quas vel rem beatae. Rerum libero adipisci cupiditate eaque mollitia earum quaerat commodi, non, vel tempora consequuntur, omnis et iste</p>
                <div className='flex'>
                    <img src={assets.facebook_icon} alt="" className='w-[40px] mr-[15px] cursor-pointer' />
                    <img src={assets.twitter_icon} alt="" className='w-[40px] mr-[15px] cursor-pointer' />
                    <img src={assets.linkedin_icon} alt="" className='w-[40px] mr-[15px] cursor-pointer' />
                </div>

            </div>
            <div className='flex flex-col items-start gap-[20px] '>

                <h2 className='text-white font-[500]'>COMPANY</h2>
                <ul>
                    <li className='mb-[10px] cursor-pointer text-[14px]' >Home</li>
                    <li className='mb-[10px] cursor-pointer text-[14px]'>About us</li>
                    <li className='mb-[10px] cursor-pointer text-[14px]'>Delivery</li>
                    <li className='mb-[10px] cursor-pointer text-[14px]'>Privacy policy</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[20px] items-start'>
                <h2 className='text-white font-[500]'>GET IN TOUCH</h2>
                <ul>
                    <li className='mb-[10px] cursor-pointer text-[14px]'>+1-212-456-7890</li>
                    <li className='mb-[10px] cursor-pointer text-red-400 text-[14px]'>contact@tomato.com</li>
                </ul>
            </div>


        </div>
        <hr className=' w-[100%] mt-[20px] bg-gray h-[2px]' />
        
        <p className='text-[12px]'>Copyright 2025 © Tomato.com - All right Reserved. </p>
    </div>
  )
}

export default Footer