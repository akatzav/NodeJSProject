import React from 'react'
import css from './HomePage.module.scss'
import NavBar from '../NavBar/NavBar'
import { TitleAndDescription } from '../titleAndescription/TitleAndDescription'
import { Footer } from '../Footer/Footer'

export const HomePage = () => {

    return (
        <div className={css.homePage}>
            <NavBar />
            <TitleAndDescription />
            <p>
                <Footer />
            </p>
        </div>
    )
}
