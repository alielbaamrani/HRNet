import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home/home"
import EmployeeList from './pages/EmployeeList/employeeList'
export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  )
}
