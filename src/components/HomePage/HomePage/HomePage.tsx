import React from 'react'
import css from './HomePage.module.scss'
import NavBar from '../../NavBar/NavBar'
import { TitleAndDescription } from '../../TitleAndescription/TitleAndDescription'
import { Footer } from '../../Footer/Footer'
import { NavLinks } from '../../NavBar/NavLinks'
import { Nav } from '../../connection/Nav/Nav'

export const HomePage = () => {

    return (
        <div className={css.homePage}>

            <section className={css.section}>
                <NavLinks />
                <TitleAndDescription />
            </section>
            <p>
                <Footer />
            </p>
        </div>
    )
}
