export const addUserAction = (usr) => {
    return { 
        type: 'ADD_USER', 
        payload: usr
    }
}
export const deleteUserAction = (usr) => { 
    return { 
        type: 'DELETE_USER', 
        payload:usr 
    }
}