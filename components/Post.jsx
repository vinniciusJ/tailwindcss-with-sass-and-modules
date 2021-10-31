import React, { useCallback, useRef } from 'react'
import Popup from './Popup'

import { MailIcon } from '@heroicons/react/outline'

import classes from '../styles/posts.module.scss'

const PostContainer = ({ post }) => {
    const popupPost = useRef(null)

    const viewPost = useCallback(() => popupPost.current.togglePopup(), [])

    return (
        <>
            <li className={classes.post} onClick={viewPost}>
                <header>
                    <h1>{ post.title }</h1>
                    <a href={post.authorWebsite}>{ post.authorName }</a>
                </header>

                <section>
                    <p> { post.content } </p>
                </section>
            </li>
        
            <Popup ref={popupPost}> 
                <header className={classes.popupHeader}>
                    <div>
                        <h1>{ post.title }</h1>
                        <a href={post.authorWebsite}>{ post.authorName }</a>
                    </div>

                    <a href={post.authorEmail}>
                        <MailIcon className="w-8 h-8"/>
                    </a>
                </header>

                <article className={classes.popupArticle}>
                    <p>{ post.content }</p>
                </article>
            </Popup>
        </>
    )
}

export default PostContainer