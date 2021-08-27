import React, { Component } from 'react'
import { savedPosts } from "../posts.json"
import css from "./css/Content.module.css"

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className={css.Content}>
                <h1 className={css.TitleBar}>My Posts</h1>
                <div classname={css.SearchResults}>
                    {savedPosts.map(post => (
                        post.title
                    ))}
                </div>
            </div>
        )
    }
}

export default Content
