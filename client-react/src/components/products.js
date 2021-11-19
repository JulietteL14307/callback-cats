import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

export const Products = () => {
    
    const [postProducts, setProducts]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products").then((data) => {
            setProducts(data.data)
        });
    },[])

    return (
        <div className="productPage">
            <div className="productParent">
            <h1>Products</h1>
            <div className="productContainer">
                {postProducts.map(( val, key) => {
                    return (
                        <div className="products">
                            <h2>{val.title}</h2>
                            <p>Department: {val.department_id}</p>
                            <p> Description: {val.description}</p>
                            <p>Quantity: {val.quantity}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}