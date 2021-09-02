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
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleChange = (event) => {
        let name = event.target.value;
        const filteredPosts = savedPosts.filter(
            post => post.title.toLowerCase().includes(name.toLowerCase())
            )
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    My Posts
                    <h4>Number of posts: {this.state.posts.length}</h4>
                    <input 
                        type="search" 
                        id="searchInput" 
                        name="searchInput"
                        placeholder="Search by title"
                        onChange={this.handleChange}
                    />
                </div>
                
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? (
                        this.state.posts.map(
                            post => (
                            <PostItem 
                                className={css.SearchItem} 
                                key={post.title} 
                                post={post} />
                            )
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
