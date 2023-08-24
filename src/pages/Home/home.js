import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Form from '../../components/Form/Form'
function home() {
  
  return (
    <div>
      <Navbar title="HRnet" />
      <Link className="employee-list" to="/employee-list">
        View Current Employee
      </Link>
      <h2 className="create-employee"> Create Employee</h2>
      <Form />
    </div>
  )
}

export default home
