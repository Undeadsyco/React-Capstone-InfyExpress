const initialState = {
  user: {},
  isLoggedIn: false,
  services: [],
  bookings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.data,
        isLoggedIn: true
      }
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      }
    case 'GET_SERVICES':
      return {
        ...state,
        services: action.data,
      }
    case 'GET_BOOKINGS':
      return {
        ...state,
        bookings: action.data,
      }
    default:
      return {
        ...state,
      };
  };
};

export default reducer;