import React from 'react'

import { SearchIcon } from '@heroicons/react/outline'

import classes from '../styles/home.module.scss'

const Home = () => {
    return (
        <div className={classes.container}>
            <section className={classes.scrollable}>
                <header>
                    <h1> JSON Placeholder Blog</h1>
                
                    <label htmlFor="search">
                        <input type="text" placeholder="Pesquisar"/>
                        <span>
                            <SearchIcon className="w-6 h-6"/>
                        </span>
                    </label>
                
                </header>

                <main>

                </main>
            </section>
            <footer>
                <p>Made by @vinniciusJ &copy;</p>
            </footer>
        </div>
    )
}

export default Home