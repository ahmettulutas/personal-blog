import React from 'react'
import { useState } from 'react';
import { getLoginBool } from '../login/loginSlice';
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "./postBlogSlice.js";
import {Navigate} from "react-router-dom";

export default function PostBlog() {
    const loginBool = useSelector(getLoginBool);
    const dispatch = useDispatch()
    const [blog, setBlog] = useState("")

    const handleSubmit = (e) => {
        dispatch(addBlog(makePostObj(blog, loginBool.user)))
        e.preventDefault()
        setBlog("")}
        
    if(!loginBool.isAuth) 
    {
    return <Navigate to="/login" />
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input 
                value={blog}
                type="text"
                onChange={(e)=> setBlog(prev => e.target.value)}>
                </input>
                <button type="submit">Post</button>
            </form>
        </div>
    )};

const makePostObj = (post,user) => {
    const date = () => {
        const dateSettings = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return new Date().toLocaleDateString("en-EN", dateSettings )
    }
    return {
        name:user,
        post:post,
        id:Math.floor(Math.random()*100000000000),
        date: date()
    }
}
