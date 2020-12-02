import React, { Component } from 'react'

import Navbar from "../component/navbar/Navbar";
import Carousel from "../component/carousel/Test";
// import MyCarousel from "../component/carousel/Category";
import Category from "../component/carousel/Category"
import New from "../component/body/New";
import Popular from "../component/body/Popular";


import "../styles/home.css";


class Home extends Component {

    state = {
        searchField: '',
    }
    render() {
        return (
            <>
            <Navbar handleChange={(e) => this.setState({searchField:e.target.value})}/>
            <Carousel/>
            <Category/>
            <New/>
            <Popular/>
            
            </>
        )
    }
}

export default Home;


