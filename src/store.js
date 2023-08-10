import { configureStore } from '@reduxjs/toolkit'
import { EmployeeReducer } from './reducers/employeeReducer'

export const store = configureStore({
  reducer: {
    newEmployee: EmployeeReducer,
  },
})