import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../component/navbar/Navbar";


import "../styles/mybag.css"
import "../styles/check.css"

class CheckOut2 extends Component {

    constructor(){
        super();
        this.state={
            qty: 1
        }
    }


    render() {
        const { name, price } = this.props;
        return (
            <div>
                <Navbar/>

                <div className="container">
                    <h1 style={{fontSize: '34px', fontWeight:'700'}}>CheckOut</h1>
                    <p className="mt-3 ttl-addrs">Shipping Address</p>
                    <div className="d-flex ">
                        <div className="left">
                            <div className='col address'>
                                <p >Akbar Zulfikar</p>
                                
                                <Link className="text-decoration-none">
                                    <div className='btn-choose-address'>
                                        <p className='addres-btn'>Choose another address</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='col prodct justify-content-between'>
                                <div className="selectAll">
                                    <div className="mt-3">
                                        <input type="checkbox" className="cek" />
                                    </div>
                                    <div className="img-chart">
                                        <img style={{height: '70px'}} src="/assets/jas.jpeg " />
                                    </div>
                                    <div className="ml-3">
                                        <p className="name-prodct">Men's formal suit - Black</p>
                                        <p className="brand-product text-muted">Zalora Cloth</p>
                                    </div>
                                    <div className="d-flex justify-content-between ml-5 mt-3" style={{height:'36px', width:'150px'}}>
                                        <Link className="text-decoration-none" onClick={() => this.setState({ qty: this.state.qty - 1 })}>
                                            <div className="btn-c" style={{backgroundColor:'#D4D4D4'}}>-</div>
                                        </Link>
                                            <p>{this.state.qty}</p>
                                        <Link className="text-decoration-none" onClick={() => this.setState({ qty: this.state.qty + 1 })}>
                                            <div className="btn-c" style={{backgroundColor:'#FFFFFF', border:"solid 1px"}}>+</div>
                                        </Link>
                                    </div>
                                </div>
                                <p className="prc">Rp.200000</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className='shop-sumry'>
                                <p className="smry-title">Shopping summary</p>
                                <div className="ttl-price">
                                    <p className="text-price text-muted">Total price</p>
                                    <p className="pay">Rp.200.000</p>
                                </div>
                                <Link className="text-decoration-none">
                                <div className="btn-buy">
                                    <p className="text-buy">Select payment</p>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CheckOut2;
