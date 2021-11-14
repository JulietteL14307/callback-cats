import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Routes } from './shared/Routes';

export const App = () => {
    return (
        <>
        <div className="routerDiv">
            <Router basename="/">
                <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                <Link style ={{ textDecoration: 'none' }}to="/departments">Departments</Link>
                <Link style={{ textDecoration: 'none' }} to="/products">Products</Link>
                <Routes />
            </Router>
        </div>
        </>
    )
}