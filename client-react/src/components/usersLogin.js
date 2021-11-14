import React from 'react';
import '../App.css';
//import axios from 'axios';

//let url = "http://localhost:3001/users/login";

export const usersLogin = () => {
    return (
        <>
        <div className="container">
            <h1>Log In</h1>
            <form action="/" method="POST">
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