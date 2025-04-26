import React from 'react'

const Header = () => {
  return (
    <div className='h-[35vw] bg-no-repeat m-[30px auto] pt-[20px] bg-contain relative rounded-[20px] ' style={{backgroundImage:`url('header_img.png')`}}>
        <div className=' md:max-w-[55%] absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fade-in '  >
            <h2 className=' sm:font-[500] text-[14px] font-[400]  text-white sm:text-[max(4.5vw,22px)]'>Order Your Favourite Food Here</h2>
            <p className=' hidden sm:block text-white text-[1.5vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the </p>
            <button className='bg-white  rounded text-[#747474] font-[500] p-1 text-[13px]'>View menu</button>
        </div>
    </div>
  ) 
}

export default Header