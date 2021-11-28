import { createSlice } from "@reduxjs/toolkit";

const options = {
    name:"postBlog",
    initialState:[],
    reducers:{
        addBlog: (state, action) => {
            return [...state, action.payload]
        }
            
        
    }
}
export const getBlogs = (state) => state.blogs;
const postBlogSlicer = createSlice(options);
export const {addBlog} = postBlogSlicer.actions;
export default postBlogSlicer.reducer;