import React from 'react'
import css from './HomePage.module.scss'
import NavBar from '../../NavBar/NavBar'
import { TitleAndDescription } from '../../TitleAndescription/TitleAndDescription'
import { Footer } from '../../Footer/Footer'
import { NavLinks } from '../../NavBar/NavLinks'
import { Nav } from '../../connection/Nav/Nav'
import { Search } from '../../search/Search'

export const HomePage = () => {

    return (
        <div className={css.homePage}>
            <div>
                <Search />
            </div>
            

            <section className={css.section}>
                <NavBar/>
                <TitleAndDescription />
            </section>
            
                {/* <Footer /> */}
            
        </div>
    )
}
