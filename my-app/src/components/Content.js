import React, { Component } from 'react'
import { savedPosts } from "../posts.json"
import css from "./css/Content.module.css"
import Loader from './Loader'
import PostItem from './PostItem'

export class Content extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor triggered")
        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

    render() {
        return (
            <div className={css.Content}>
                <h1 className={css.TitleBar}>My Posts</h1>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? (
                        savedPosts.map(post => <PostItem className={css.SearchItem} key={post.title} post={post} />
                        )
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        )
    }
}

export default Content
