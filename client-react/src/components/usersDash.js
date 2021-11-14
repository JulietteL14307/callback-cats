import React from 'react';
import '../App.css';
//import axios from 'axios';

//let url = "http://localhost:3001/users/home";

export const usersDash = () => {
    return (
        <>
        <div className="navContainer">
            <nav>
                <ul className="deptNav">
                    <li className="navLi">Grocery</li>
                    <li className="navLi" >Electronics</li>
                    <li className="navLi" >Clothing</li>
                    <li className="navLi" >Home</li>
                    <li className="navLi">Baby</li>
                </ul>
            </nav>
        </div>
        </>
    )
}