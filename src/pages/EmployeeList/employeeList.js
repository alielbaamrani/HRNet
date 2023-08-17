import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './employeeList.scss'
import TableList from '../../components/Table/Table'

function EmployeeList() {
  return (
    <div>
      <Navbar title="Current Employees" />
      <TableList />
    </div>
  )
}

export default EmployeeList
