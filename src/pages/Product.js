import React, { Component } from 'react'
import axios from 'axios';
import Productname from "../component/product/Product";

const getUrl = "http://localhost:1000/product/";

class Product extends Component {
    state = {
        product:[],
    }

    getSingleProduct = () => {
        const { match } = this.props;
        axios
        .get(getUrl + match.params.id)
        .then(({data}) => {
            this.setState({
                product: data.data,
            })
        })
        .catch((err) => {
            console.log(err)
        });
        }

        componentDidMount = () => {
            this.getSingleProduct();
        }

    render() {
        console.log(this.state.product)
        return (
            <div>
                
                <Productname name={this.state.product.product_name} brand={this.state.product.category_name} desc={this.state.product.product_description} price={this.state.product.product_price}/>
            </div>
        )
    }
}

export default Product;
