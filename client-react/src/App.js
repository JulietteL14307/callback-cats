import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Routes } from './shared/Routes';

export const App = () => {
    return (
        <>
        <div className="routerParent">
        <div className="routerDiv">
            <Router basename="/">
                <div><Link style={{ textDecoration: 'none' }} to="/">Home</Link></div>
                <div><Link style={{ textDecoration: 'none' }} to="/products">Products</Link></div>
                <Routes />
            </Router>
        </div>
        </div>
        </>
    )
}