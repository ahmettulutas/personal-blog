import React from 'react'
import "./welcome.css"


export default function Welcome({loginBool}) {

    return (
        <div className="welcome-div">
            {loginBool.isAuth ? <h1>Welcome {loginBool.user}</h1> :<h1>Welcome Guest. Please sign up or log in to save some blogs.</h1> }
        </div>
    )
}
