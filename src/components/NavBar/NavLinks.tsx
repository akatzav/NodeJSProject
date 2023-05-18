import { BiSearchAlt } from 'react-icons/bi'
import css from './NavBar.module.scss'
import { motion } from 'framer-motion'


export const NavLinks = (props: any) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (

        <ul className={css.ul}>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
                <a href='/Signup' className={css.a}> Sign up</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }}>
                <a href='/Signin' className={css.a}> Sign In</a>
            </motion.li>

            {/* <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }}>
                <a href='/' className={css.a}>  Home </a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.10 }}>
                <a href='/About' className={css.a}>  About</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
                <a href='/products' className={css.a}> products</a>
            </motion.li>

            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
                <a href='/' className={css.a}> favourites</a>
            </motion.li> */}

            

            <section className={css.section}>
            <input type="text" className={css.search} placeholder='Search'/>
                <BiSearchAlt className={css.icon} />
            </section>

        </ul>
    )
}