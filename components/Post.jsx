import React from 'react'
import Popup from './Popup'

import classes from '../styles/posts.module.scss'

const PostContainer = ({ post }) => {
    return (
        <>
            <li className={classes.post}>
                <header>
                    <h1>{ post.title }</h1>
                    <a href={post.authorWebsite}>{ post.authorName }</a>
                </header>

                <section>
                    <p> { post.content } </p>
                </section>
            </li>
        
            <Popup> 

            </Popup>
        </>
    )
}

export default PostContainer