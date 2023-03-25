import React from "react";
const User = ({ addUser, userDetails, setUserDetails, udpateUser }) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    gender,
    language,
    zipCode,
    about,
  } = userDetails;

  const handleChange = (e) => {
    let newUserDetails = { ...userDetails };
    newUserDetails[e.target.name] = e.target.value;
    setUserDetails(newUserDetails);
  };
  // const handleRadio=(e)=>{
  //   console.log(e.target.value)
  //   let newUser= {...userDetails}
  //   newUser[e.target.name] = e.target.value
  //   setUserDetails(newUser)
  // }
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="email"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Phone Number
          </label>
          <input
            type="email"
            className="form-control"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Gender
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            checked={gender === "Male"}
            value="Male"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Other
          </label>
        </div>

        <select
          className="form-select"
          name="language"
          value={language}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="">Select Language</option>
          <option value="Telugu">Telugu</option>
          <option value="Tamil">Tamil</option>
          <option value="Kannada">Kannada</option>
        </select>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Zip Code
          </label>
          <input
            type="email"
            className="form-control"
            name="zipCode"
            value={zipCode}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            About
          </label>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="about"
            value={about}
            onChange={(e) => {
              handleChange(e);
            }}
          ></textarea>
        </div>
        <br />
        {userDetails.id ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={udpateUser}
          >
            Update
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={addUser}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default User;
