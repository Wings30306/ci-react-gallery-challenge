import React from 'react'

function PostItem(props) {

    let {title, name, image, description} = props.post
    return (
        <div>
            <p>{title}</p>
            <p>{name}</p>
            <img alt={name} src={image} />
            <p>{description}</p>
        </div>
    )
}

export default PostItem
