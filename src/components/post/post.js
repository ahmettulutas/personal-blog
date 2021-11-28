import React from 'react'
import "./post.css";                                              
 function Post({item}) {
    return (
        <div className="main-post-item">
            <h1>{item.post}</h1>
            <p>{item.name}</p>
            <p>{item.date}</p>
        </div>
    )
}

export default Post;