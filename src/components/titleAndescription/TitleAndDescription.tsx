import React from 'react'
import css from './TitleAndDescription.module.scss'
import { BiSearchAlt } from 'react-icons/bi'
export const TitleAndDescription = () => {
  return (
    <div className={css.tAd}>
      <h1 className={css.title}>Equipment Tour.</h1>
      <p className={css.description}> Unprecedented promotions</p>

    </div>
  )
}
