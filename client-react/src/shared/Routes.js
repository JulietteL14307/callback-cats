import React from 'react';
import {Switch, Route} from "react-router-dom";
import { Home } from '../components/Home';
import { UsersLogin } from '../components/usersLogin';
import { usersSignup } from '../components/usersSignup';
import { Products } from '../components/products';
import { ProductsAdmin } from '../components/productsAdmin';
import { EditProduct } from '../components/productsID';

export const Routes = () => {
    return (
        <Switch>

            <Route exact path="/" component={Home}/>
            <Route path="/users/login" component= {UsersLogin}/>
            <Route path="/users/signup" component ={usersSignup}/>
            <Route exact path="/products" component = {Products}/>
            <Route exact path="/products/admin" component = {ProductsAdmin}/>
            <Route path="/products/admin/edit" component = {EditProduct}/>

        </Switch>
    )
}