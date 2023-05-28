import React from 'react'
import css from './HomePage.module.scss'
import NavBar from '../../NavBar/NavBar'
import { TitleAndDescription } from '../../TitleAndescription/TitleAndDescription'
import { Footer } from '../../Footer/Footer'

export const HomePage = () => {

    return (
        <div className={css.homePage}>
            <section className={css.section}>
                <NavBar />
                <TitleAndDescription />
            </section>
            <p>
                <Footer />
            </p>
        </div>
    )
}
