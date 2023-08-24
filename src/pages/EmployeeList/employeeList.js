import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './employeeList.scss'
import TableList from '../../components/Table/Table'
import { useNavigate } from 'react-router-dom'

function EmployeeList() {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar title="Current Employees" />
      <TableList />
      <button  onClick={() => navigate("/")}> Home</button> 
    </div>
  )
}

export default EmployeeList
