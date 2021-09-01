import React, { Component } from 'react'
import { savedPosts } from "../posts.json"
import css from "./css/Content.module.css"
import PostItem from './PostItem'

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
                <div className={css.SearchResults}>
                    {savedPosts.map(post => <PostItem className={css.SearchItem} key={post.name} post={post} />
                    )}
                </div>
            </div>
        )
    }
}

export default Content
