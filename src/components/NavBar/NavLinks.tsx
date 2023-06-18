import css from './NavBar.module.scss'
import { motion } from 'framer-motion'


export const NavLinks = () => {

    return (

        <div className={css.navbar}>

                {/* <a href='/Signup' > Sign up</a>
                <a href='/Signin' > Sign In</a> */}
                <a href='/' className={css.active}>  Home </a>
                <a href='/About' >  About</a>
                <a href='/products' > products</a>
                <a href='/favourites' > favourites</a>

                <div className={css.pointer}></div>
        </div>
    )
}