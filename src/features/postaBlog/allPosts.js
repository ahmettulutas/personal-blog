import React from 'react'
import Post from "../../components/post/post.js";
import { useSelector } from 'react-redux';
import { getBlogs } from "./postBlogSlice.js";
import PostBlog from "./postBlog.js"
import "./allPosts.css";
 function AllPosts() {
    const allPosts = useSelector(getBlogs);
    return (
        <div className="main-each-post-div">
            <PostBlog />
            <h1>All Posts</h1>
           {allPosts.map(postMapFunction)} 
        </div>
    )
}

const postMapFunction = (item) => {
    return (
        <Post item={item} />
    )}
export default AllPosts;