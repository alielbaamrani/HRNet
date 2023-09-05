import { configureStore } from '@reduxjs/toolkit'
import { EmployeeReducer } from './reducers/employeeReducer'
import employeeSlice from './reducers/employeeSlice'

export const store = configureStore({
  reducer: {
    newEmployee: EmployeeReducer,
    employee: employeeSlice,
  },
})