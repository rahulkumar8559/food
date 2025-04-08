import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

export const Cart = () => {

  const { cartItems, food_list, removetocart,getTotalCartAmount } = useContext(StoreContext);
  const navigate=useNavigate();


  return (
    <div className='mt-[100px]'>
      <div>
        <div className='items-center text-gray-500 text-[max(1vw,12px)] ' style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr ' }}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr ' }} className='items-center  my-[10px] mx-[0] text-[black] text-[max(1vw,12px)]'>
                  <img src={item.image} alt="" className='w-[50px]' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removetocart(item._id)} className='cursor-pointer'>X</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
              </div>

            )


          }
        })}
      </div>
      <div className='mt-[80px] flex justify-between' style={{ gap: "max(15px, 25px)" }}>
        <div className='flex-[0.7] flex-col gap-[20px] text-[14px]' >
          <h2 className='text-[25px] font-[600]'>Cart Total</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p> ${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()?"$" +2 :"$0"}</p>
            </div>
            <hr className='my-[10px] mx-[0]' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>{getTotalCartAmount()? "$"  +(getTotalCartAmount()+2):"$0"}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className='border-none text-white bg-red-500 w-[max(15vw,200px)] py-[12px] px-[0] rounded-[4px]'>PROCEED TO CHECKOUT</button>
        </div>
        <div>
          <div className='flex-1' >
            <p className='text-[#555] text-[14px]'>If you have a promo code, Enter it here</p>
            <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input type="text" placeholder='promo code' className='bg-transparent border-none outline-none pl-[10px]' />
              <button className='w-[max(10vw,150px)] py-[8px] px-[5px] bg-black border-none text-white rounded-[4px]' >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
