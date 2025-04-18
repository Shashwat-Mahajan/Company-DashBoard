import React from 'react'
import Header from '../other/Header'
import TasklistNumbers from '../other/TasklistNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
    <Header data={data}/>
    <TasklistNumbers data={data}/>
    <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard
