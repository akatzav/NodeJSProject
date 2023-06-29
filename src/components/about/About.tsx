import React from 'react'
import css from './About.module.scss'
import { Footer } from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { NavLinks } from '../NavBar/NavLinks'


export const About = () => {
  return (
    <div className={css.about}>
      <NavLinks />
      <h1 className={css.title}>About</h1>
      <p className={css.paragraph}>Nonstop is an Israeli Web Marketing and sales  for 24 hours a day.
        Founded in 2023 by Avigail Katzav.<br />
        Nonstop today is well established and prestigious company mainly for its professional service,
        Hight quality standard emphasis and it’s continuously growing number of customers,
        Who enjoys of centralized and convenient shopping of electronics’ and cellular products,
        Satisfactory customer service and Unbeatable prices.
        Register , and start enjoy with  excellent shopping experience .</p>

      <Footer />
    </div>
  )
}
