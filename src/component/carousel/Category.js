import React, { Component } from 'react'
import "./category.css"

class Category extends Component {
    render() {
        return (
            <div className="container">
                 <div className="category ">
                <h2>Category</h2>
                <h4>What are you currently looking for</h4>
            </div>
            <center>
                <div className="row justify-content-center info ">
                    <div className="col-xs-2 tshirt mb-5 " style={{backgroundColor: "brown", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 15.png " alt=" "/>
                        <h5>t-shirt</h5>
                    </div>
                    <div className="col-xs-2 pants mb-5 " style={{backgroundColor: "black", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 21.png " alt=" "/>
                        <h5>shorts</h5>
                    </div>
                    <div className="col-xs-2 jacket mb-5 " style={{backgroundColor: "blue", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 22.png " alt=" "/>
                        <h5>jacket</h5>
                    </div>
                    <div className="col-xs-2 levis mb-5" style={{backgroundColor: "salmon", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 26.png " alt=" "/>
                        <h5>pants</h5>
                    </div>
                    <div className="col-xs-2 shoes mb-5 " style={{backgroundColor: "green", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 34.png " alt=" "/>
                        <h5>shoes</h5>
                    </div>
                </div>
            </center>
                
            </div>
        )
    }
}

export default Category;
