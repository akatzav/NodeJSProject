import React, { useEffect, useState } from 'react'
import { NavLinks } from '../../NavBar/NavLinks';
import { Footer } from '../../Footer/Footer';
import css from './SignUp.module.scss'
import axios from 'axios';
//להירשם



export const SignUp = () => {

    const url = 'http://localhost:3001/api/auth/signup'

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log("error: " + err);

            })
    })


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [user, setUser] = useState([])





    const isValidEmail = (email: string) => {
        const check1 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        return check1;
    }


    const isValidPassword = (password: any) => {
        const check2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
        return check2;
    }



    const handleUser = (e: any) => {
        setUserName(e.currentTarget.value);
        if(userName==='' || userName.length==0){
            alert('invalid username.')
        }
        setSubmit(false);
    }



    const handleEmail = (e: any) => {
        setEmail(e.currentTarget.value);
        if (!isValidEmail(e.target.value) || email==='' ||email.length==0) {
            setEmailError('Invalid Email.');
            setSubmit(false)
        }
        else {
            setEmailError('')
            setError(false);
        }
    }

    const handlePassword = (e: any) => {
        setPassword(e.currentTarget.value);
        if (!isValidPassword(e.target.value) || password==='' ||password.length==0) {
            setErrorPass('Invalid Password.')
            setSubmit(false)
        }
        else {
            setErrorPass('');
            setError(false)
        }
    }

    //if the value is empty
    const handleSubmit = (e: any) => {
        //מונע ריענון של העמוד
        e.preventDefault();

        if (!isValidEmail(email)|| !isValidPassword(password)) {
            setError(true);
            setSubmit(false)
            alert('Please enter all fields')
        }
        else {
            alert('All the fields is full')
            setSubmit(true);
            setError(false);

        }
        const newUser = { username: userName, email, password }


        fetch(url, {
            method: 'POST',//or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),

        }).then(res => res.json())
            .then(json => {
                console.log(json);
                /* newStudent._id=json.id */
            }).catch(e => console.log(e));

    };


    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                    color: 'red',
                    fontFamily: 'Dongle',
                    fontSize: "15px"
                }}>
                <h2>Please enter all the fields</h2>
            </div>
        );
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submit ? '' : 'none',
                    color: 'green',
                    fontSize: "15px"
                }}>
                <h2>User successfully registered!!</h2>
            </div>
        );
    };





    return (

        <div className={css.signup}>

            <form className={css.form}>
                <h1 className={css.title}>Sign up</h1>
                <label htmlFor="" className={css.label}>Username:</label><br />
                <input type="text" value={userName} placeholder='Username' onChange={handleUser} className={css.input} /><br />
                <label htmlFor="" className={css.label}>Email:</label><br />
                <input type="email" id='email' value={email} placeholder='Email' onChange={handleEmail} className={css.input} />
                <br />
                {emailError && <h2 style={{ color: 'red', fontSize: "10px" }}>{emailError}</h2>}

                <label htmlFor="" className={css.label}>Password:</label><br />
                <input type="password" value={password} placeholder='Password' onChange={handlePassword} className={css.input} />
                <br />
                {errorPass && <h2 style={{ color: 'red', fontSize: "10px" }}>{errorPass}</h2>}

                <button type='submit' className={css.button} onClick={handleSubmit}>Sign up</button>
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

            </form>
            <Footer />
        </div>
    )
}

export default SignUp 


















