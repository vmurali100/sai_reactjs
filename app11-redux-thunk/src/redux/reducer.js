export const defaultState = {
  users: [],
};
export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {...state,users:action.payLoad};

    default:
      return state;
  }
};
