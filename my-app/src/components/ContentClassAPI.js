import React, { Component } from 'react'
import axios from "axios"
import API_KEY from '../secrets'
import { savedPosts } from "../posts.json"
import css from "./css/Content.module.css"
import Loader from './Loader'
import PostItemAPI from './PostItemAPI'

export class ContentClassAPI extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor triggered")
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages(){
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        console.log(response)

        const fetchedPosts = response.data.hits
        console.log(fetchedPosts)
        this.setState({ 
            isLoaded: true,
            posts: fetchedPosts})
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
                            <PostItemAPI 
                                className={css.SearchItem} 
                                key={post.id} 
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

export default ContentClassAPI
