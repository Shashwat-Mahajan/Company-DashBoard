import React from 'react';
import { toast } from "react-toastify";

const Header = ({data}) => {
  const logoutUser = () =>{
    localStorage.setItem("loggedinUser","");
    window.location.reload();
    toast.success("Logout Successfully");
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white'> Hello <br/> <span className='text-white text-3xl'>{data.name}</span> 👍</h1>
        <button onClick={logoutUser} className='active:scale-95 transition-transform duration-100 cursor-pointer bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Logout</button>
    </div>
  )
}

export default Header
