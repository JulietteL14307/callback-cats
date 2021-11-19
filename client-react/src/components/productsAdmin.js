import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const ProductsAdmin = () => {
    const [ title, setTitle ] = useState();
    const [ description, setDescription ] = useState();
    const [ quantity, setQuantity ] = useState();
    const [ department_id, setDeptID ] = useState();
    const [ inStock, setInStock ] = useState();

    // const history = useHistory();
    // const { id } = useParams();

    const createProduct = (id) => {
        if(window.confirm("Are you sure you want to create this product? Click ok if yes.")){
        axios.post("http://localhost:3001/products/admin", {                
            title: title, 
            description: description, 
            quantity: quantity, 
            department_id: department_id, 
            inStock: inStock})}}

        const [products, setProducts]=useState([]);
        const [editProducts, setEditProducts]=useState({});

        useEffect(() => {
            getProducts();
        },[])

        const getProducts = () => {
            axios.get("http://localhost:3001/products").then((data) => {
                setProducts(data.data)
            });
        }

        const deleteProduct = async (id) => {
            if(window.confirm("Are you sure you want to delete the product? Click ok if yes.")){
        await axios.delete(`http://localhost:3001/products/admin/${id}`);
        getProducts();
        }}

        const handleChange = (e) => {
            setEditProducts(
                {
                    ...editProducts,
                    [e.target.name]: e.target.value
                }
            ); console.log(editProducts);
        }

        const editProduct = async (e, id) => {
            e.preventDefault(); 
            if(window.confirm("Are you sure you want to update this product? Click ok to save changes.")){
                await axios.put(`http://localhost:3001/products/admin/${id}`, {
                title: editProducts.title,
                description: editProducts.description,
                quantity: editProducts.quantity,
                department_id: editProducts.department_id,
                inStock: editProducts.inStock
            });
                getProducts();
            }
            }

            return (
                <div className="createProduct">
                    <div>
                         <h1>Create Product</h1>
                            <form>
                                <div className="form">
                                    <div>
                                        <div>
                                        <label htmlFor="title">Title:</label><br></br>
                                        </div>
                                        <input type="text" id="title" name="title" onChange={(e) => {
                                        setTitle(e.target.value)
                                        }}></input>
                                    </div>
                                    <div>
                                        <div>
                                        <label htmlFor="description">Description:</label><br></br>
                                        </div>
                                        <input type="text" id="description" name="description" onChange={(e) => {
                                        setDescription(e.target.value)
                                        }}></input>
                                    </div>
                                    <div>
                                        <div>
                                        <label htmlFor="quantity">Quantity:</label>
                                        </div>
                                        <input type="text" id="quantity" name="quantity" onChange={(e) => {
                                        setQuantity(e.target.value)
                                        }}></input>
                                    </div>
                                    <div>
                                        <div>
                                        <label htmlFor="department_id">Department ID:</label>
                                        </div>
                                        <input type="text" id="deptID" name="deptID" onChange={(e) => {
                                        setDeptID(e.target.value)
                                        }}></input>
                                    </div>
                                    <div>
                                        <div>
                                        <label htmlFor="inStock">In Stock(0 or 1):</label>
                                        </div>
                                        <input type="text" id="inStock" name="inStock" onChange={(e) => {
                                        setInStock(e.target.value)
                                        }}></input>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={createProduct}>Submit</button>
                                    </div>
                            </form>
                        </div>


                        <div className="productPage">
                            <div className="productParent">
                                <h1>Products</h1>
                                    <div className="productContainer">
                                    {products.map(( val, key) => {
                                         return (
                                            <div className="products" key={key}>
                                            <h2>{val.title}</h2>
                                                <p>Department: {val.department_id}</p>
                                                <p> Description: </p><div><p>{val.description}</p></div>
                                                <p>Quantity: {val.quantity}</p>
                                                <h3>Edit Product</h3>
                                                <form onSubmit= {(e) => editProduct(e, val.product_id)}>
                                                <div>
                                                <input placeholder="Department ID"  name="department_id" onChange={handleChange}/>
                                                </div>
                                                <div>
                                                <input placeholder="Description" name="description" onChange={handleChange}/>
                                                </div>
                                                <div>
                                                <input placeholder="Quantity" name="quantity" onChange={handleChange}/>
                                                </div>
                                                <div>
                                                <button type="submit" className="edit">Edit Product</button>
                                                </div>
                                                </form>
                                                <div>
                                                <button onClick= { () => deleteProduct(val.product_id) } className="delete">Delete Product</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    </div>
                            </div>
                        </div>
                </div>
                    )}