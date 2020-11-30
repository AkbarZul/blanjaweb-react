import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './new.css'


import axios from 'axios';
const getUrl = "http://localhost:1000/products/popular";

class Populardata extends Component {
    state ={
        products: []
    }

    getAllProducts = () => {
        axios.get(getUrl).then(({data}) => {
            this.setState({
                products: data,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getAllProducts()
    }
    render() {
        const {products} = this.state;
        console.log(this.state.products)

            return (
                <>
                {products.map(({id, product_name, product_price, category_name, product_description, product_rating}) => {
                        return (
                            <Card className="card-style" style={{width: "18rem"}}>
                               
                               <img src="/assets/jas.jpeg " className="card-img-top" alt="..."/>
                               
                        <div className="card-body">
                           <h5 className="card-title">{product_name}</h5>
                        <p className="card-text">{product_price}</p>
                        <p className="card-text">{category_name}</p>
                        <p className="card-text">{product_description}</p>
                        <Link to={{
                                   pathname:`/product/${id}`,
                                   state: this.state
                               }}>
                        <Button class="btn btn-primary mt-4">
                            Detail
                        </Button>
                        </Link>
                           {/* <div className="star">
                                <img src={starRate} alt=""/>
                                <img src={starRate} alt=""/>
                                <img src={starRate} alt=""/>
                                <img src={starRate} alt=""/>
                                <img src={starRate} alt=""/>
                                <p style={{fontSize: "12px", color: "#9B9B9B", margin: "0 5px"}}>(10)</p>
                           </div> */}
                        </div>
                    </Card>
                        );
                    })}
                    
                </>
            )
        
    }
}

export default Populardata;
