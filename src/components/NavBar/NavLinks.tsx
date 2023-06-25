import css from './NavBar.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const NavLinks = () => {

    return (

        <div className={css.navbar}>

            
            <Link to='/' className={css.active}>  Home </Link>
            <Link to='/About' >  About</Link>
            <Link to='/products' > products</Link>
            <Link to='/favourites' > favourites</Link>

            <div className={css.pointer}></div>
        </div>
    )
}