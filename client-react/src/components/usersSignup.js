import React from 'react';
import '../App.css';

export const usersSignup = () => {
    return (
        <>
        <div className="container">
            <h1>Signup</h1>
            <form action="/" method="post">
                <div className="form">
                <label for="username">Username</label><br></br>
                <input type="text" id="username" name="username"></input><br></br>
                <label for="password">Password</label><br></br>
                <input type="password" id="password" name="password"></input><br></br>
                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}