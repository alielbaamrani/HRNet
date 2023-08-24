import { createSlice } from '@reduxjs/toolkit'

const EmployeeList = [
  {
    key: '1',
    firstName: 'ali',
    lastName: 'Brown',
    startDate: '17/08/2023',
    departement: 'Sales',
    dateOfBirth: '21/11/2000',
    street: 'Deuil la barre',
    city: 'morte',
    state: 'France',
    zipCode: '95170',
  },
  {
    key: '2',
    firstName: 'John ',
    lastName: 'Brown',
    startDate: '17/08/2023',
    departement: 'Sales',
    dateOfBirth: '21/11/2000',
    street: 'Deuil la barre',
    city: 'morte',
    state: 'France',
    zipCode: '95170',
  },
  {
    key: '3',
    firstName: 'John ',
    lastName: 'Brown',
    startDate: '17/08/2023',
    departement: 'Sales',
    dateOfBirth: '21/11/2000',
    street: 'Deuil la barre',
    city: 'morte',
    state: 'France',
    zipCode: '95170',
  },
  {
    key: '4',
    firstName: 'John ',
    lastName: 'Brown',
    startDate: '17/08/2023',
    departement: 'Sales',
    dateOfBirth: '21/11/2000',
    street: 'Deuil la barre',
    city: 'morte',
    state: 'France',
    zipCode: '95170',
  },
]

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: EmployeeList
  },
  reducers: {
    add: (state, action) => {
      state.employees.push(action.payload)
    }
  }
})

export const { add } = employeeSlice.actions

export default employeeSlice.reducer

export const selectEmployees = (state) => state.employees