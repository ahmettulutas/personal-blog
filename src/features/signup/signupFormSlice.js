import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "signupForm",
  initialState: [],
  reducers: {
    signupNewUser: (state, action) => {
     // Checks if the user name is already taken
        if(state.some(item => item.user === action.payload.user)) {
          return alert("Please Choose Another User Name") 
        }
        else {
          return [...state, action.payload];  
        }
    }
  }
};
export const signupFormSlice = createSlice(options);
export const { signupNewUser } = signupFormSlice.actions;
export default signupFormSlice.reducer;

export function getUsers(state) {
  return state.signedupUser;
}