import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  
  return (
    <div id='tasklist' className='bg-[#1C1C1C] p-5 mt-5 rounded h-60% items-center'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
            <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
            <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
            <h5 className='w-1/5 text-lg font-medium '>Completed Task</h5>
            <h5 className='w-1/5 text-lg font-medium '>Failed Task</h5>
          </div>
      <div id='tasklist' className='overflow-y-scroll'>
      {userData.map( (elem ,idx) => {
        return (
          <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg font-medium text-white'>{elem.name}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCount.new}</h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-600'>{elem.taskCount.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-green-600'>{elem.taskCount.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
          </div>
        );
      })}
      </div>
      
    </div>
  )
}

export default AllTask
