import React from 'react'

function NewTask() {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4>20 Feb</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a Project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga repudiandae.</p>
        <div className='mt-4 flex items-start'>
           <button className=' bg-black py-1 px-2 text-sm text-white rounded'>Accept Task</button> 
        </div>
        
      </div>
    </div>
  )
}

export default NewTask
