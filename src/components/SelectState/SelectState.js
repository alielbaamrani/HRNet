import React from 'react'
import { setValue } from '../../actions'
import { states } from '../Form/countryList'
import { useDispatch, useSelector } from 'react-redux'

function SelectState() {
  const newEmployee = useSelector((state) => state.newEmployee)
  const dispatch = useDispatch()

  const handleChange = (event, inputName) => {
    const inputValue = event.target.value
    dispatch(setValue(inputName, inputValue))
  }

  return (
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
  )
}

export default SelectState
