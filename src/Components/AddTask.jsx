import React from 'react'
import { PlusCircleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const AddTask = () => {
    const navigate = useNavigate();
  return (
    <div
      className={`flex gap-3 cursor-pointer p-2 rounded-lg text-addbutton hover:bg-hover_sidenav`}
      onClick={()=>navigate(`/todo`)}
    >
      <PlusCircleFilled className="text-lg" />
      <p>Add Task</p>
    </div>
  )
}

export default AddTask