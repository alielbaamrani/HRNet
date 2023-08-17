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

  EmployeeList: [
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
  ],
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
