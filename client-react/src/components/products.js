import React from 'react';
import axios from 'axios';

class Products extends React.Component {
    state = {
        productData: []
    };

    fetchProductData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    productData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchProductData();
    }

    render() {
        console.log(this.state.productData);
        if (this.state.productData.length === 0) {
            return <div>Could not fetch the data you are looking for.</div>;
        }
        const products = this.state.productData.map((product, idx) => (
            <div key={idx}>
                <em>{product.title}</em>: {product.quantity}
            </div>
        ));
        return <div>{products}</div>
    }
}

export default Products;