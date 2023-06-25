import React from 'react'
import css from './TitleAndDescription.module.scss'
import { BiSearchAlt } from 'react-icons/bi'
export const TitleAndDescription = () => {
  return (
    <div className={css.tAd}>
      <h1 className={css.title}>Non Stop Sale.</h1>
      <p className={css.description}>Mobile equipment <br />and computers</p>

    </div>
  )
}
