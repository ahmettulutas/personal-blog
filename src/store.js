import { configureStore } from "@reduxjs/toolkit";
import signupFormSlice from "./features/signup/signupFormSlice.js";
import loginSlice from "./features/login/loginSlice.js";
import postBlogSlicer from "./features/postaBlog/postBlogSlice";
const store = configureStore({
  reducer: {
    signedupUser: signupFormSlice,
    loginBool: loginSlice,
    blogs: postBlogSlicer
  }
});
export default store;
