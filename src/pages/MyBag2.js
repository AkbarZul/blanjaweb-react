import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import Navbar from "../component/navbar/Navbar";

import "../styles/mybag.css"

class Mybag2 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <p className="first">MyBag</p>
                    <div className="row">
                        <div className="col-7">
                    <Card>
                    <Card.Body>
                    <div className="d-flex justify-content-around">
                    <p className="select">Select all items (2 items selected)</p>
                    <Button className="delete mr-60">delete</Button>
                    </div>
                    </Card.Body>
                    </Card>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Mybag2;
