import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { NavLinks } from '../../NavBar/NavLinks';
import css from './SignIn.module.scss'
import SignUp from '../SignUp/SignUp';
import { ProductList } from '../../../pages/productList/ProductList';
import { Nav } from '../Nav/Nav';

export const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [signIn, setSignIn] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const url = 'http://localhost:3001/api/auth/signin'

    const nav = useNavigate();

    const saveUser = async () => {
        const newUser = { email, password }



        try {

            const response = await fetch(url, {
                method: 'POST',//or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })
            const body = await response.json()
            if (response.ok) {
                //success
                setSignIn('Success')
                nav('/');

            } else {
                //error 
                setSignIn('Error')
            }
        } catch (error) {
            // fetch
            setSignIn('Error')


        }


    }

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }


    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
                <h1 className={css.title}>Log In</h1>
                {/*  <label htmlFor="email" className={css.label1}> Email : </label> <br /> */}
                <input type="email" id='email' value={email} placeholder=' &#xf0e0; Email*' onChange={handleEmail} className={css.input} /><br />

                {/* <label htmlFor="password" className={css.label2}> Password : </label> <br /> */}
                <input type="password" value={password} id="password" placeholder=' &#xf023; Password*' onChange={handlePassword} className={css.input} /> <br /><br />

                {signIn === 'Success' && <span style={{ color: 'green' }}>success </span>}
                {signIn === 'Error' && <span style={{ color: 'red' }}>Error </span>}

                <button type='submit' onClick={saveUser} className={css.button}>Login</button>
                <p className={css.p}>
                    <h5 className={css.h5}>Already have an account?</h5>
                    <a href='/Signup' className={css.link}>Sign Up</a>

                </p>
            </form>
        </div >
    )
}
export default LogIn