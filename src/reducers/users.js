const initialState = { users: [], loafing: false, error: null };
const users = (state = initialState, action) => {
  switch (action.action) {
    case "GET_USERS_REQUESTED":
      return { ...state, loafing: true };
    case "GET_USERS_SUCCESS":
      return { ...state, loading: false, users: action.users };
    case "GET_USERS_FAILED":
      return { ...state, loading: false, users: action.message };
    default:
      return state;
  }
};

export default users;
