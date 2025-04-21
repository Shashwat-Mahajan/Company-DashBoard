import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.Category}</h3>
            <h4>{data.TaskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.TaskTitle}</h2>
        <p className='text-sm mt-2'>{ data.TaskDescription}</p>
        <div className='mt-4 flex items-start text-black'>
           <button className=' bg-amber-300 py-1 px-2 text-sm text-black rounded'>Complete Task</button> 
        </div>
      </div>
  )
}

export default CompleteTask
