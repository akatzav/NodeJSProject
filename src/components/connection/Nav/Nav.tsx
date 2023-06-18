import React from 'react'
import css from './Nav.module.scss'


export const Nav = () => {
    return (
        <div className={css.Nav}>
            <a href='/Signup' > Sign Up</a>
            <a href='/Signin' > Log In</a>
        </div>
    )
}
