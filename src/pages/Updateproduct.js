import React, { Component } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'
import Navbar from '../component/navbar/Navbar'

const getUrl = 'http://localhost:1000/product/'

class Updateproduct extends Component {

    state={
        id: '',
        product_color: '',
        product_size: ''
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        await axios.patch(getUrl, this.state)
        alert('product has been updated')
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
            <Navbar />
              <div className="container">
                <h2>Update product baru</h2>
                <form className="col-lg-6" onSubmit={this.handlerSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name product</Form.Label>
                    <Form.Control  type="text" name="id" placeholder="Name product" onChange={this.handlerChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text"  name="product_color" placeholder="Category" onChange={this.handlerChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text"  name="product_size" placeholder="Category" onChange={this.handlerChange} />
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
        )
    }
}


export default Updateproduct;
