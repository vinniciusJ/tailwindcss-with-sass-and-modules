import React from 'react'
import axios from 'axios'

import Post from '../components/Post'
import { SearchIcon } from '@heroicons/react/outline'

import classes from '../styles/home.module.scss'

const Home = ({ posts }) => {
    return (
        <div className={classes.container}>
            <section className={classes.scrollable}>
                <header>
                    <h1>Blog</h1>
                
                    <label htmlFor="search">
                        <input type="text" placeholder="Pesquisar"/>
                        <span>
                            <SearchIcon className="w-6 h-6"/>
                        </span>
                    </label>
                
                </header>

                <main>
                    <ul>
                        { posts.map(post => <Post post={post}/>) }
                    </ul>
                </main>

            </section>
            <footer>
                <p>Made by @vinniciusJ &copy;</p>
            </footer>
        </div>
    )
}

export const getStaticProps = async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    const { data: authors } = await axios.get('https://jsonplaceholder.typicode.com/users/')

    const finalPosts = posts.map(post => {
        const author = authors.find(author => author.id = post.userId)

        return {
            authorName: author.name,
            authorEmail: author.email,
            authorWebsite: author.website,
            postID: post.id,
            title: post.title,
            content: post.body
        }
    })

    return {
        props: { posts: finalPosts }
    }
}

export default Home