import "./signup.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupNewUser } from "./signupFormSlice.js";
import { Link, Navigate } from "react-router-dom";
import { getUsers } from "./signupFormSlice.js";
export function SignupForm() {
  const allUsers = useSelector(getUsers)
  useEffect(() => {
    console.log(allUsers)
 
  }, [allUsers])
 
  const dispatch = useDispatch();
  const [signupInfo, setSignupInfo] = useState({user: "", password: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...signupInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    dispatch(signupNewUser(signupInfo));
    e.preventDefault();
    setSignupInfo({ user: "", password: "" });
    
  };
  
  
  if(allUsers.length > 0) {
    return (
    <Navigate to="/" />
    )

  }
  return (
    <div className="signup-main-div">
      <h1> SignUpFirst </h1>
      <form onSubmit={handleSubmit}>
        <input
          value={signupInfo.user}
          name="user"
          onChange={(e) => handleChange(e)}
          type="text"
        ></input>
        <input
          value={signupInfo.password}
          name="password"
          onChange={(e) => handleChange(e)}
          type="password"
        ></input>
        <button type="submit"> add </button>
      </form>
      <p>Already have an account? <button><Link to="/">LOGIN</Link></button></p>
    </div>
  );
}
  