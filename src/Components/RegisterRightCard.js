import React from 'react'

export default function RegisterRightCard() {
    return (
        <div className="content_rgt">
            <div className="register_sec">
                <h1>Create An Account</h1>
                <form action="http://localhost:3000/register" name="reg_form" method="POST">
                    <ul>
                        <li><span>Username</span><input type="text" name="username" placeholder="Enter your username" /></li>
                        <li><span>Password</span><input type="password" name="password" placeholder="Enter your password" /></li>
                        <li><span>Email</span><input type="email" name="email" placeholder="Enter your email" /></li>
                        <li><span>First Name</span><input type="text" name="fname" placeholder="Enter your first name" /></li>
                        <li><span>Last Name</span><input type="text" name="lname" placeholder="Enter your last name" /></li>
                        <li><input type="checkbox" required />I agree to Term & Conditions</li>
                        <li><input type="submit" value="Register" /></li>
                    </ul>
                </form>
                <div className="addtnal_acnt">I already have an account.<a href="">Login My Account !</a></div>
            </div>
        </div>
    )
}
