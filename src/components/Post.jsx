import React, { useContext } from 'react'
import { PostsContext } from '../context/PostContext'

const Post = () => {
    const {postToShow}= useContext(PostsContext)
    return (
        <>
            {postToShow.map((post, index) => (
                <div key={index} className='post'>
                    <h1>{post.title}</h1>
                    <p>
                        {post.body}
                    </p>
                    <div className="post-details">
                        <div className="tags">
                            {post.tags.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                        <div className="reactions">
                            <p>👍 {post.reactions.likes}</p>
                            <p>👎 {post.reactions.dislikes}</p>
                        </div>
                        <div className="views">
                            <p>👁️ {post.views}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Post
