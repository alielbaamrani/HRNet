import React, { useState } from 'react'
import './form.scss'
import { setValue } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import SelectState from '../SelectState/SelectState'
import { DatePicker } from 'antd'
import { add } from '../../reducers/employeeSlice'
import { Modal } from 'ael-modal'

function Form() {
  // MODAL
  const [modalContent, setModalContent] = useState('')

  const openModal = () => {
    const content = '<p>This is the modal content.</p>'
    setModalContent(content)
    modal.open({ content })
  }

  const closeModal = () => {
    setModalContent('')
    modal.close()
  }

  const modal = new Modal()

  //
  const newEmployee = useSelector((state) => state.newEmployee)
  const dispatch = useDispatch()
  const dateFormatList = ['DD/MM/YYYY']

  const onChange = function (date, dateString) {
    dispatch(setValue('dateOfBirth', dateString))
    console.log(dateString)
  }
  const onChangeStart = function (date, dateString) {
    dispatch(setValue('startDate', dateString))
    console.log(dateString)
  }

  const handleChange = (event, inputName) => {
    const inputValue = event.target.value
    dispatch(setValue(inputName, inputValue))
  }

  const handleSubmit = (e) => {
    openModal()
    e.preventDefault()
    console.log(newEmployee)

    dispatch(add(newEmployee.CreateEmployee))
    console.log('handleSubmit')
  }

  return (
    <div className="container">
      <div>
        <button onClick={openModal}>Open Modal</button>

        {modalContent && (
          <div className="modal">
            <div
              className="modal-content"
              dangerouslySetInnerHTML={{ __html: modalContent }}
            />
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
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
          Date
          <DatePicker format={dateFormatList} onChange={onChange} />
        </label>
        <label>
          Start Date
          <DatePicker format={dateFormatList} onChange={onChangeStart} />
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
            <SelectState />
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
        <input className="submit" type="submit" value="Save" />
      </form>
    </div>
  )
}

export default Form
