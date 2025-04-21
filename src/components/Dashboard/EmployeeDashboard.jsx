import React from 'react'
import Header from '../other/Header'
import TasklistNumbers from '../other/TasklistNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
    <Header data={props.data} changeUser={props.changeUser}/>
    <TasklistNumbers data={props.data}/>
    <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
