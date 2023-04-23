import React from 'react'
import css from './About.module.scss'
import { Footer } from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'


export const About = () => {
  return (
    <div className={css.about}>
      <NavBar />
      <h1 className={css.title}>About</h1>
      <p className={css.paragraph}>France is one of the most visited countries in the world.
        Every year tens of thousands of tourists from all over the world come to enjoy what France has to offer.
        On this website, we have gathered the best attractions and top trips for you.
        Among other things, you can find good deals here if you have registered for the website.
        At every stage you can view the details of the trips and plan the trip you've been dreaming of so much.<br />
        Hope you enjoy!!</p>

        <Footer />
    </div>
  )
}
