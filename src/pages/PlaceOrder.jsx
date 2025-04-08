import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className='flex justify-between items-start  gap-[50px] mt-[100px]'>
      <div className='w-[100%] mb-[1px] max-w-[max(30%,500px)] '>
        <p className='font-[600] text-[30px] mb-[50px] '>Delivery Information</p>
        <div className='flex gap-[10px]' >
          <input className='mb-[15px] w-[100%]  text-[12px] p-[4px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='First nme' />
          <input className='mb-[15px] w-[100%] p-[4px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='Last name' />
        </div>
        <input className='mb-[15px] w-[100%] p-[4px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='Email address' />
        <input className='mb-[15px] w-[100%] p-[4px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='street' />
        <div className='flex gap-[10px]' >
          <input className='mb-[15px] w-[100%] p-[4px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='City' />
          <input className='mb-[15px] w-[100%] p-[4px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='State' />
        </div>
        <div className='flex gap-[10px]'>
          <input className='mb-[15px] w-[100%] p-[10px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='Zip code' />
          <input className='mb-[15px] w-[100%] p-[4px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='Country' />
        </div>
        <input className='mb-[15px] w-[100%] p-[4px] text-[12px] border-[1px] border-black rounded-[4px] outline-red-500' type="text" placeholder='Phone' />

      </div>

      <div className='w-[100%] max-w-[max(40%,500px)]'>
        <div className='flex-[0.7] flex-col gap-[20px] text-[14px]' >
          <h2 className='text-[25px] mb-[20px] font-[600]'>Cart Total</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p> ${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()?"$"+ 2 :"$0"}</p>
            </div>
            <hr className='my-[10px] mx-[0]' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b> {getTotalCartAmount()? "$"  +(getTotalCartAmount()+2):"$0"}</b>
            </div>
          </div>
          <button className='border-none text-white mt-[30px] bg-red-500 w-[max(15vw,200px)] py-[12px] px-[0] rounded-[4px]'>Proceed To Payment</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder