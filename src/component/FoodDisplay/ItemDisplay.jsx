import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const ItemDisplay = ({ id, name, price, description, image }) =>{

    const {removetocart, addtocart , cartItems}=useContext(StoreContext);

    
    return (
        <div className='w-[%] m-[auto] rounded-[15px] shadow-lg  animate-fade-in '>
            <div className='relative'>
                <img src={image} alt="" className='rounded-t-lg' />
                {!cartItems[id]
                ?<img onClick={()=> addtocart(id)} src={assets.add_icon_white} alt="" className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' />
                :<div className='absolute flex right-[15px] bottom-[15px] items-center p-[4px] gap-[10px] rounded-[50px] bg-white'>
                    <img onClick={()=>removetocart(id)} src={assets.remove_icon_red} alt="" className='w-[25px]'  />
                    <p>{cartItems[id]}</p>
                    <img className='w-[25px]' onClick={()=>addtocart(id)} src={assets.add_icon_green} alt=""  />

                </div>

                }
            </div>
            <div className='p-[20px] '>
                <div className='flex justify-between items-center mt-[10px]'>
                    <p className='text-[15px] font-[500]'>{name}</p>
                    <img src={assets.rating_starts} alt="" className='w-[70px]' />
                </div>
                <p className='text-[#676767] text-[12px]'>{description}</p>
                <p className='text-red-400 text-[22px] font-[500] mt-[10px]'>${price}</p>
            </div>

        </div>
    )
}

export default ItemDisplay