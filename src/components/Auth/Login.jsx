import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const submitHandler = (e) =>{
        e.preventDefault();
        handleLogin(email,password);
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            value={email}
            onSubmit={(e) => {
                submitHandler(e)
            }}            
            className='flex flex-col items-center justify-center max-w-md'>
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }} 
                required className= ' bg-transparent outline-none border-2 border-emerald-500 py-4 px-5 rounded-4xl text-xl placeholder:text-gray-300' type='email' placeholder='Enter your Email'></input>
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}required className= ' bg-transparent outline-none border-2 border-emerald-500 py-4 px-5 rounded-4xl text-xl placeholder:text-gray-300 mt-3' type='password' placeholder='Password'></input>
                <button required className= 'w-full active:scale-95 transition-transform duration-100 cursor-pointer mt-5 text-white outline-none border-none bg-emerald-500 py-4 px-5 rounded-4xl text-xl ' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
