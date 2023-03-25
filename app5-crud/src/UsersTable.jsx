import React from "react";

const UsersTable = ({allUsers,deleteUser,editUser}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Zip</th>
            <th>About</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {allUsers.map((usr)=> <tr>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.phoneNumber}</td>
                <td>{usr.gender}</td>
                <td>{usr.zipCode}</td>
                <td>{usr.about}</td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={()=>{editUser(usr)}}>Edit</button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={()=>{deleteUser(usr)}}>Delete</button>
                </td>
            </tr> )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
