export const addStart = () => {
  return {
    type: 'ADD_CONTACT_STARTED'
  };
};

export const throwErr = (message) => {
  return {
    type: 'ADD_CONTACT_FAILED',
    data: message
  };
};

export const addContact = (contact) => {
  return {
    type: 'ADD_CONTACT_SUCCESS',
    data: contact
  };
};
