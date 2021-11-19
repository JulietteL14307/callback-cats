import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../App.css';

export const EditProduct = () => {

    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ quantity, setQuantity ] = useState("");
    const [ department_id, setDeptID ] = useState("");
    const [ inStock, setInStock ] = useState("");

    const history = useHistory();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/products/admin/${id}`, {
            title: title,
            description: description,
            quantity: quantity,
            department_id: department_id,
            inStock: inStock
        });
        history.push("/");
    }

    // useEffect(() => {
    //     getProductById();
    // }, );

    // const getProductById = async (id) => {
    //     const response = await axios.get(`http://localhost:3001/products/admin/${id}`);
    //     setTitle(response.data.title);
    //     setDescription(response.data.description);
    //     setQuantity(response.data.quantity);
    //     setDeptID(response.data.department_id);
    //     setInStock(response.data.inStock);
    // }

    return (
        <>
        <div>
            <div>
                <h1>Edit Product</h1>
            </div>
            <form onSubmit={ updateProduct }>
                <div>
                    <label>Title</label>
                    <input type="text" placeholder="Title" value={ title } onChange= { (e) => setTitle(e.target.value) }/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" placeholder="Description" value={ description } onChange= { (e) => setDescription(e.target.value) }/>
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="text" placeholder="Quantity" value={ quantity } onChange= { (e) => setQuantity(e.target.value) }/>
                </div>
                <div>
                    <label>Department ID</label>
                    <input type="text" placeholder="Department ID" value={ department_id } onChange= { (e) => setDeptID(e.target.value) }/>
                </div>
                <div>
                    <label>In Stock?</label>
                    <input type="text" placeholder="1 or 0" value={ inStock } onChange= { (e) => setInStock(e.target.value) }/>
                </div>
                <div>
                    <button>Update</button>
                </div>
            </form>
        </div>
        </>
    )
}