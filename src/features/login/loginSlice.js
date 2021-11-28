import { createSlice } from "@reduxjs/toolkit";
export const getLoginBool = (state) => state.loginBool;
const options = {
  name: "isAuth",
  initialState: {isAuth:false,user:""},
  reducers: {
    checkLoginInfo: (state, action) => {
      const { loginInfo, users } = action.payload;
      if(users.some(item => item.user === loginInfo.user && item.password === loginInfo.password )) {
          return {isAuth:true,user:loginInfo.user}
      }
      else {
        alert("Invalid username & password")
      }
    }
  }
};
export const loginSlice = createSlice(options);
export const { checkLoginInfo } = loginSlice.actions;
export default loginSlice.reducer;
