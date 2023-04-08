// All Business Logic will be handled in Reuducer
const defaultState = {
  users: [],
};

export const rootReducer = function (state = defaultState, action) {
  switch (action.type) {
    case "GET_USERS":
      return state;

    case "ADD_USER":
      let newUsers = [...state.users];
      newUsers.push(action.payLoad);
      return { ...state, users: newUsers };

    case "DELETE_USER":
        return {...state,users:state.users.filter((user)=> user.email !== action.payLoad.email)}

    case "UPDATE_USER":
        let allUsers = state.users;
        allUsers.forEach((us,index)=>{
            if(us.email == action.payLoad.email){
                allUsers[index] = action.payLoad
            }
        })
        return {...state , users:allUsers}

    default:
      return state;
  }
};
