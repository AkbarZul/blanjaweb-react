import React, { Component } from 'react'
import Rating from "../rating/Rating"
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../body/new.css"

const getUrl = 'http://localhost:1000/search'

class Productcategory extends Component {
    state ={
        products: []
    }

    getAllProducts = () => {
        const categoryQ = this.props.ctg
        axios.get(getUrl + categoryQ).then(({data}) => {
            this.setState({
                products: data.data,
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
        return (
                
                        <div className="container">
                        <div className="row d-flex flex-row justify-content-center">
            {products.map(({id, product_name, product_price, category_name, product_description, product_rating}) => {
                    return (
                        <Card className="card-style" style={{width: "18rem"}}>
                          
                           <img src="/assets/jas.jpeg " className="card-img-top" alt="..."/>
                           
                    <div className="card-body">
                       <h5 className="card-title">{product_name}</h5>
                    <p className="card-text">{product_price}</p>
                    <p className="card-text">{category_name}</p>
                    <p className="card-text">{product_description}</p>
                    <Rating product_rating={product_rating}/>
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
               </div>
                </div>
            
        )
    }
}


export default Productcategory;
