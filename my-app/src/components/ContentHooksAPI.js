import React, { useState, useEffect } from 'react'
import axios from "axios"
import API_KEY from '../secrets'
import css from "./css/Content.module.css"
import Loader from './Loader'
import PostItemAPI from './PostItemAPI'

function ContentHooksAPI() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(() => {
        fetchImages();
        return () => {
            setPosts([])
            setSavedPosts([])
        }
    }, [])

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        console.log(response)

        const fetchedPosts = response.data.hits
        setIsLoaded(true);
        setSavedPosts(fetchedPosts);
        setPosts(fetchedPosts)
    }

    const handleChange = (event) => {
        let name = event.target.value;
        const filteredPosts = savedPosts.filter(
            post => post.user.toLowerCase().includes(name.toLowerCase())
            )
        setPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                My Posts
                <h4>Number of posts: {posts.length}</h4>
                <input
                    type="search"
                    id="searchInput"
                    name="searchInput"
                    placeholder="Search by title"
                    onChange={handleChange}
                />
            </div>

            <div className={css.SearchResults}>
                {isLoaded ? (
                    posts.map(
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

export default ContentHooksAPI
