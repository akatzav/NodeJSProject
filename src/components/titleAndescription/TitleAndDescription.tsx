import React from 'react'
import css from './TitleAndDescription.module.scss'
export const TitleAndDescription = () => {
  return (
    <div><h1 className={css.title}>france.</h1>
        
        <p className={css.description}> The ideal place</p>
    </div>
  )
}
