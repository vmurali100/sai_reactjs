import axios from "axios";
export const getAllUsersAsyncAction = () => async (dispatch) => {
  getAllUsers(dispatch);
};

const getAllUsers = async (dispatch) => {
  const response = await axios.get("http://localhost:3201/users");
  dispatch({
    type: "GET_USERS",
    payLoad: response.data,
  });
};
export const deleteUserAsyncAction = (usr) => async (dispatch) => {
  const resp = await axios.delete("http://localhost:3201/users/" + usr.id);
  getAllUsers(dispatch);
};
export const updateUserAsycAction = (user) => async (dispatch) => {
  const resp = await axios.put("http://localhost:3201/users/" + user.id, user);
  getAllUsers(dispatch);
};

export const createUserAsycAction = (user) => async (dispatch) => {
  const resp = await axios.post("http://localhost:3201/users/", user);
  getAllUsers(dispatch);
};
