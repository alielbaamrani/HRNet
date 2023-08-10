const INITIAL_STATE = {
  CreateEmployee: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    zipCode: '',
    state: '',
    departement: '',

  },

  EmployeeList: {
    
  }

}

export const EmployeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        CreateEmployee: {
          ...state.CreateEmployee,
          [action.payload.inputName]: action.payload.inputValue,
        },
      }
    default:
      return state
  }
}
