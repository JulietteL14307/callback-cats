import React, { useEffect, useState } from 'react';
import axios from "axios";

let url = "http://localhost:3001/products";


export const products = () => {
    // const [state, setState] = useState();

    // useEffect(() => {
    //     getData();
    // }, [state]);

    // const getData = () => {
    //     axios.get(url).then(res => setState(res.data))
    // }

    // let data = !state ? [{}] : state;
    return (
        <>
            <h1>Products Works!</h1>
            {/* <button onClick={() => console.table(state)}>State</button>
            <ul>
                {data.map((d, idx) => (
                    <li key={idx}>{d.title}</li>
                ))}
            </ul> */}
        </>
    )
}