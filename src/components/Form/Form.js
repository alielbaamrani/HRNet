import React from 'react'
import './form.scss'
import { setValue } from '../../actions'
import { states } from './countryList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Form() {
  const newEmployee = useSelector((state) => state.newEmployee)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event, inputName) => {
    const inputValue = event.target.value
    dispatch(setValue(inputName, inputValue))
  }


  const handleSubmit = () => {
    navigate('/employee-list')
    console.log('handleSubmit')
  }

  return (
    <div className="container">
      <form>
        <label>
          First Name
          <input
            type="text"
            value={newEmployee.firstName}
            onChange={(event) => handleChange(event, 'firstName')}
            className="firstName"
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={newEmployee.lastName}
            onChange={(event) => handleChange(event, 'lastName')}
            className="lastName"
          />
        </label>
        <label>
          Date of Birth
          <input
            type="date"
            value={newEmployee.dateOfBirth}
            onChange={(event) => handleChange(event, 'dateOfBirth')}
            className="birth"
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            value={newEmployee.startDate}
            onChange={(event) => handleChange(event, 'startDate')}
            className="date"
          />
        </label>

        <div className="address">
          <label>
            Street
            <input
              type="text"
              value={newEmployee.street}
              onChange={(event) => handleChange(event, 'street')}
              className="Street"
            />
          </label>
          <label>
            City
            <input
              type="text"
              value={newEmployee.city}
              onChange={(event) => handleChange(event, 'city')}
              className="City"
            />
          </label>
          <label>
            State
            <select
              id="select"
              value={newEmployee.state}
              onChange={(event) => handleChange(event, 'state')}
            >
              {states.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Zip Code
            <input
              type="number"
              value={newEmployee.zipCode}
              onChange={(event) => handleChange(event, 'zipCode')}
              className="Zip Code"
            />
          </label>
        </div>

        <label>Department</label>
        <select
          className="department"
          value={newEmployee.departement}
          onChange={(event) => handleChange(event, 'departement')}
          id="department"
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <input onClick={handleSubmit} className="submit" type="submit" value="Save"/>
      </form>
    </div>
  )
}

export default Form
