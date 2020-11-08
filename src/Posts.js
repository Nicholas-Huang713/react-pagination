import React from 'react'

export default function Posts({posts, loading}) {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    )
}
