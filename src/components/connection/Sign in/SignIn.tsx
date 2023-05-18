import React, { useContext, useEffect, useState } from 'react'


export const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signIn, setSignIn] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/auth/signin')
            .then(res => res.json())
            .then(json => {
                setSignIn(json)
            })
    }, [])


    const savePerson = async () => {
        const newPerson = { email:email, password:password }
        const url1 = 'http://localhost:3001/api/auth/signin'

        fetch(url1, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPerson),
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            }).catch(e => console.log(e));

    }












    /*  useEffect(()=>{
         fetch("http://localhost:3001/api/auth/signin",{
             headers: {"Content-Type":"application/json"},
             method:"POST",
             body:JSON.stringify({
                 email:"Avigailkatzav@gmail.com",
                 password:"123456aW@",
             }),
         })
         .then((res)=>res.json())
         .then((json)=>{
             console.log(json);
         })
         .catch((e)=>{
             console.log(e);
         })
     },[]) */



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
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label> <br />
                <input type="email" id='email' value={email} placeholder='Email' onChange={handleEmail} /><br />
                <label htmlFor="password"> Password </label> <br />
                <input type="password" value={password} id="password" placeholder='Password' onChange={handlePassword} /> <br /><br />
                <button type='submit' onClick={savePerson}>Sign in</button>
            </form>
        </div >
    )
}
export default LogIn