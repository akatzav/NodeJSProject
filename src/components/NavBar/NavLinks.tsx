import css from './NavBar.module.scss'
import { motion } from 'framer-motion'


export const NavLinks = (props: any) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (

        <ul className={css.ul}>
            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }}>
                <a href='/Filters' className={css.a}> Log In</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }}>
                <a href='/RestaurantList' className={css.a}>  Home </a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.10 }}>
                <a href='/About' className={css.a}>  About</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
                <a href='/' className={css.a}> favourites</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
                <a href='/' className={css.a}> Atractions</a>
            </motion.li>

        </ul>
    )
}