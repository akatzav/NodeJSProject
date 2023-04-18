import React from 'react'
import css from './HomePage.module.scss'

export const HomePage = () => {

    return (
        <div className={css.homePage}>
            <br /><br />
            <h1 className={css.title}>France.</h1>
            <br /><br /><br /><br /><br /><br />
            <p className={css.description}>
                The Ideal Place
            </p>
        </div>
    )
}
