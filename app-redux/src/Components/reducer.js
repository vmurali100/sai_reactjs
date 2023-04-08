const initialState ={ users:[] }

export const reducer =  (state = initialState, action) => {

    switch (action.type) {
        case "ADD_USER":
            let newUsers = [...state.users];
            newUsers.push(action.payload);
            return { ...state, users: newUsers };
        case "DELETE_USER":
            let newUser = [...state.users]
            return newUser.filter((usr) => usr.email !== action.payload.email);
        default:
            return state;
    }

}