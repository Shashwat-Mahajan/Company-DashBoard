import React from 'react'

const TasklistNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
      <h3 className='text- xl mt-0.5 font-medium'>New Tasks</h3>
      </div>
      <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
      <h3 className='text-xl mt-0.5  font-medium'>Completed Tasks</h3>
      </div>
      <div className='rounded-xl py-6 px-9 w-[45%] bg-gray-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
      <h3 className='text-xl mt-0.5  font-medium'>Active Tasks</h3>
      </div>
      <div className='rounded-xl  py-6 px-9 w-[45%] bg-yellow-400'>
      <h2 className='text-black text-3xl font-semibold '>{data.taskCount.failed}</h2>
      <h3 className='text-black text-xl mt-0.5  font-medium'>Failed Tasks</h3>
      </div>
    </div>
    
  )
}

export default TasklistNumbers
