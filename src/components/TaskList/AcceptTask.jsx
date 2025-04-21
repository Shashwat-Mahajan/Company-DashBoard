import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.Category}</h3>
            <h4 className='text-sm'>{data.TaskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.TaskTitle}</h2>
        <p className='text-sm mt-2'>{data.TaskDescription}</p>
      <div className='flex justify-between mt-6'>
        <button className='bg-green-500 py-1 px-2 font-medium text-sm rounded'>Mark as Completed</button>
        <button className='bg-red-600 py-1 px-2 text-sm font-medium rounded'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
