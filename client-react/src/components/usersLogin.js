import React, { useState } from 'react';
import '../App.css';
import AuthService from '../shared/AuthService';
//import axios from 'axios';

//let url = "http://localhost:3001/users/login";

const Auth = new AuthService();


export const UsersLogin = () => {
    const [user, setUser] = useState();

    const handleChange = (e) => {
        setUser(
            {
                ...user,
                 [e.target.name]: e.target.value}
        )
        console.log(user);
    }

    const handelFormSubmit = (e) => {
        e.preventDefault();
        Auth.login(user.username, user.password)
        .then(res => {
            // Load profile?
        }).catch( err => {
            console.log(err);
        })
    }

    return (
        <>
        <div className="container">
            <h1>Log In</h1>
            <form onSubmit={handelFormSubmit}>
                <div className="form">
                <label htmlFor="username">Username</label><br></br>
                <input type="text" id="username" name="username" onChange={handleChange}></input><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" id="password" name="password" onChange={handleChange}></input><br></br>
                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}