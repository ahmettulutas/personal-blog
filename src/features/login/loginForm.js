import "./login.css"
import { useState } from "react";
import { Link , useNavigate, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../signup/signupFormSlice.js";
import { checkLoginInfo, getLoginBool } from "./loginSlice.js";

function LoginForm() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({user: "", password: ""});
  const users = useSelector(getUsers);
  const loginBool = useSelector(getLoginBool)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...loginInfo, [name]: value }));
  };
  const handleSubmit = (e) => {
    dispatch(checkLoginInfo({ loginInfo: loginInfo, users: users }));
    e.preventDefault();
    setLoginInfo({ user: "", password: "" });
  
    
    
  };
  if(loginBool.isAuth) {
    return (
      <Navigate to="/" />
    )
  }
  return (
    <div className="login-main-div">
      <h1> Please Login if you already have an account </h1>
      <section className="form-div">
      <form className="login-form"onSubmit={handleSubmit}>
        <input
          value={loginInfo.user}
          name="user"
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="enter your username"
        ></input>
        <input
          value={loginInfo.password}
          name="password"
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="enter your password"
        ></input>
        <button type="submit">login</button>
      </form>
      <button className="sign-up-button"><Link to="/sign-up">SIGNUP</Link></button>
      </section>
    </div>
  );
}
export default LoginForm;
