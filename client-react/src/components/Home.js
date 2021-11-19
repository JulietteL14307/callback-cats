import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './shoppingCart.png';

export const Home = () => {
    return (
        <>
        <div className="container">
            <div className="heading">
                <h1>InventoryStory</h1>
                <img src={logo} alt="shopping cart" className="logo"></img>
            </div>
            <div className="homeParent">
                <ul className="homeCont">
                    <li className="login"><button><Link to="/users/login" style={{ textDecoration: 'none' }}>Log In</Link></button></li>
                    <li className="newU"><button><Link to="/users/signup" style={{ textDecoration: 'none' }}>New User?</Link></button></li>
                    <li><button><Link style={{ textDecoration: 'none' }} to="/products/admin">Admin</Link></button></li>
                </ul>
            </div>
        </div>
        </>
    )
}