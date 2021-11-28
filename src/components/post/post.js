import React from 'react'

 function Post({item}) {
    return (
        <div>
            <h1>{item.post}</h1>
            <p>{item.name}</p>
            <p>{item.date}</p>
        </div>
    )
}

export default Post;