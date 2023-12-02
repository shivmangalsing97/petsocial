import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let initSession    

    if(localStorage.getItem("session") === null){
        initSession = false ;
    } else{
        initSession = false ;
        // initSession = JSON.parse(localStorage.getItem("session"))
        console.log(initSession)
         
    }
    
    function  verifyLogInAndCreateSession(email, password){
        if(email==="shiv@example.com"){
            if(password === "Shiv@1234"){
                alert("Login Success")
                return true ;
            }
        }
    }

    const submit = (e)=>{
        e.preventDefault();
        if(!email || !password){
            alert("Email or Password can't be Emapty")
            setEmail("");
            setPassword("") 
        }else {
                let session = verifyLogInAndCreateSession(email, password)
                console.log(session)
                setEmail("")
                setPassword("")
                setSession(session);
        }
    }

    const [session, setSession] = useState(initSession)
    useEffect(() => {
        localStorage.setItem("session", JSON.stringify(session));
    }, [session])
    
    const navigate = useNavigate() ;
    useEffect(() => {
    if(session){
        navigate("/loggedInHome"); 
    }
    }, [session])
    

    return (
        <div className="content_rgt">
            <div className="login_sec">
                <h1>Log In</h1>
                <form onSubmit={submit}>
                    <ul>
                        <li><span>Email-ID</span><input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></li>
                        <li><span>Password</span><input type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /></li>
                        <li><input type="checkbox" />Remember Me</li>
                        <li><input type="submit" value="Log In" /><Link to="/reset">Forgot Password</Link></li>
                    </ul>
                </form>
                <div className="addtnal_acnt">I do not have any account yet.<Link to="/register">Create My Account Now !</Link></div>
            </div>
        </div >
    )
}
