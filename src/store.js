import { configureStore } from '@reduxjs/toolkit'
// import employeeReducer from './reducers/employeeSlice'
import { EmployeeReducer } from './reducers/employeeReducer'
import employeeSlice from './reducers/employeeSlice'

export const store = configureStore({
  reducer: {
    newEmployee: EmployeeReducer,
    employee: employeeSlice,
  },
})