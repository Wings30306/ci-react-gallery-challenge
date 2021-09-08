import React from 'react'

function PostItemAPI(props) {

    let { id, user, type, tags, webformatURL} = props.post
    return (
        <div>
            <p>{id}</p>
            <p>by {user}</p>
            <img alt={type} src={webformatURL} />
            <p>{tags}</p>
        </div>
    )
}

export default PostItemAPI
