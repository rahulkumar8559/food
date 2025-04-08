import React, { useState } from 'react';
import { assets } from '../assets/assets';

const LoginPopup = ({ setShowLogin ,setProfileLogo}) => {
    const [currentState, setCurrentState] = useState('login')

    const [input,setInput]=useState([{
        name:"",
        email:"",
        password:"",
    }])

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Get existing users from localStorage or initialize an empty array
        const storedUsers = JSON.parse(localStorage.getItem("users")) ||[];
    
        if (currentState === "sign-up") {
            // Check if the email is already registered
            const userExists = storedUsers.find(user => user.email === input.email);
            if (userExists) {
                alert("User already exists! Please login.");
                return;
            }
    
            // Add new user to the list
            storedUsers.push(input);
            localStorage.setItem("users", JSON.stringify(storedUsers));
            alert("User created successfully");
        } else {
            // Find the user in the stored users list
            const user = storedUsers.find(user => user.email === input.email && user.password === input.password);
    
            if (user) {
                alert("Login successful");
                setShowLogin(false);
                setProfileLogo(true);
                localStorage.setItem("loggedIn", true);
            } else {
                alert("Login failed: Invalid credentials");
            }
        }
    };
    
    return (
        <div className='absolute z-[1] w-[100%] h-[100%] bg-[#00000090] flex justify-center items-center '>
            <form onSubmit={handleSubmit} className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fade-in '>

                <div className='flex items-center justify-between text-black' >
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={(() => setShowLogin(false))} className='cursor-pointer w-[16px]'  />

                </div>
                <div className='flex flex-col gap-[20px]'>
                    {currentState ==='login' ? <></> : <input type="text" name="name" value={input.name} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}  placeholder='your name' required className='outline-none border-[1px] border-[#c9c9c9] p-[5px] rounded-[4px]' />}
                    <input  type="email" placeholder='your email' required className='outline-none border-[1px] border-[#c9c9c9] p-[5px] rounded-[4px]' name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
                    <input type="password" placeholder='your password' className='outline-none border-[1px] border-[#c9c9c9] p-[5px] rounded-[4px]' required name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
                </div>
                <button type='submit' className='bg-gray-200 border-none p-[10px]  rounded-[4px] text-white bg-red-400 text-[15px]' >{currentState === 'sign-up' ? 'create account' : 'login'}</button>
                <div className='flex items-start gap-[8px] m-[-15px]'>
                    <input className='m-[5px]' type='checkbox' required/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {
                    currentState==='login'?
                    <p>Create a new account? <span className='cursor-pointer  text-red-400 font-[500]' onClick={()=>setCurrentState('sign-up')}>Click here</span> </p>:
                    <p>Already have an account? <span className='cursor-pointer text-red-400 font-[500]' onClick={()=>setCurrentState('login')}>Login here</span> </p>
                }
                
            </form>



        </div>
    )
}

export default LoginPopup;