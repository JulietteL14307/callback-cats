import React from 'react';
import {Switch, Route} from "react-router-dom";
import { Home } from '../components/Home';
import { usersLogin } from '../components/usersLogin';
import { usersSignup } from '../components/usersSignup';
import { usersDash } from '../components/usersDash';
import { usersAdmin } from '../components/usersAdmin';
import { departments } from '../components/departments';
import { products } from '../components/products';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/users/login" component= {usersLogin}/>
            <Route path="/users/signup" component ={usersSignup}/>
            <Route path="/users/dash" component = {usersDash}/>
            <Route path="/users/admin" component = {usersAdmin}/>
            <Route path="/departments" component ={departments}/>
            <Route path="/products" component = {products}/>

        </Switch>
    )
}