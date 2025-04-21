import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4>20 Feb</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a Project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga repudiandae similique voluptatibus ducimus eum corrupti voluptate.</p>
        <div className='mt-4 flex items-start text-black'>
           <button className=' bg-amber-300 py-1 px-2 text-sm text-black rounded'>Failed Task</button> 
        </div>
      </div>
  )
}

export default FailedTask
