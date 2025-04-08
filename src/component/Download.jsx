import React from 'react'
import { assets } from '../assets/assets'

const Download = () => {
  return (
    <div className='m-auto mt-[100px]  text-[max(2.5vw,20px)] text-center font-[500]'>
        <p>For Better Experience Download <br /> Tomato App </p>

        <div className='flex justify-center gap-[max(2vh,10px)] mt-[40px]'>
            <img src={assets.play_store} alt="" className='cursor-pointer w-[max(30vw,120px)] max-w-[180px] duration-[0.5s] transform hover:scale-[1.05]' />
            <img src={assets.app_store} alt="" className='cursor-pointer w-[max(30vw,120px)] max-w-[180px] duration-[0.5s] transform hover:scale-[1.05]' />
        </div>
        
    </div>
  )
}

export default Download