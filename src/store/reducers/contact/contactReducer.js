const initState = {
  contacts: [],
  errorMessage: null,
}

export const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_STARTED':
      return {
        ...state,
        errorMessage: null
      }
    case 'ADD_CONTACT_FAILED':
      return {
        ...state,
        errorMessage: action.data
      }
    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: [...state.contacts, action.data],
        errorMessage: null
      }
    default:
      return {
        ...state
      }
  }
}

