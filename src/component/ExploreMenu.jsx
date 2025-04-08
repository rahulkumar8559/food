import React from 'react';
import { menu_list } from '../assets/assets';

function ExploreMenu({category, setCategory }) {
return (
    <div className='flex flex-col gap-[20px]'>
        <h1 className='font-[500] text-[#262626]'>Explore our menu</h1>
        <p className='font-[400] text-[13px] max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining  experience, one delicious meal at a time.</p>
        <div className='flex justify-between items-center text-center gap-[65px] my-[10px] p-[10px] overflow-x-scroll scrollbar-hide '>
            {menu_list.map((item,i)=>
                (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)}
                     key={i}>
                        <img src={item.menu_image} alt=''
                         className={`w-[7.5vw] min-w-[80px] rounded-[50%] cursor-pointer  ${category===item.menu_name ? "border-[3px] border-red-300 p-[2px]":"" } ` } />
                        <p className=' mt-[10px] text-[#747474] text-[1.4vw,16px]'>{item.menu_name}</p>
                        
                        

                    </div>

                )
            )}
        </div>
        <hr className='mt-[-5px] border-none h-[2px] bg-[#e2e2e2]'/>
    </div>
)
}

export default ExploreMenu;