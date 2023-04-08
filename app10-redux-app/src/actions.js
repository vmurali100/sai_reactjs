export const addUserAction = (usr)=>{
    return {
      type:"ADD_USER",
      payLoad:usr
    }
  }

export const deleteUserAction=(usr)=>{
    return {
        type:"DELETE_USER",
        payLoad:usr
    }
}

export const updateUserAction=(usr)=>{
    return {
        type:"UPDATE_USER",
        payLoad:usr
    }
}