import React from 'react'
import css from './NotFound.module.scss'
import { Footer } from '../Footer/Footer'
import { BiError } from 'react-icons/bi'

export const NotFound = () => {
    return (
        <div className={css.notFound}>
            <h1 className={css.h1}> 404</h1>
            <br />
            <p className={css.p1}>Page is not found!</p>
            <Footer />
        </div>
    )
}
