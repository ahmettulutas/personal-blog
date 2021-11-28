import React from 'react'
import Post from "../../components/post/post.js";
import { useSelector } from 'react-redux';
import { getBlogs } from "./postBlogSlice.js";
 function AllPosts() {
    const allPosts = useSelector(getBlogs);
    return (
        <div>
           {allPosts.map(postMapFunction)} 
        </div>
    )
}

const postMapFunction = (item) => {
    return (
        <Post item={item} />
    )
}
export default AllPosts;