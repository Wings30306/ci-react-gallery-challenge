import React, {useState, useEffect } from 'react'
import { savedPosts } from "../posts.json"
import css from "./css/Content.module.css"
import Loader from './Loader'
import PostItem from './PostItem'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([])

    useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(true);
            setFetchedPosts(savedPosts)
        }, 2000);
    }, [])

    const handleChange = (event) => {
        let name = event.target.value;
        const filteredPosts = savedPosts.filter(
            post => post.title.toLowerCase().includes(name.toLowerCase())
            )
        setFetchedPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
                <div className={css.TitleBar}>
                    My Posts
                    <h4>Number of posts: {fetchedPosts.length}</h4>
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
                        fetchedPosts.map(
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

export default ContentHooks
