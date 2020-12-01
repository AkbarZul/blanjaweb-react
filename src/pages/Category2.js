import React, { Component } from 'react'
import Navbar from "../component/navbar/Navbar";
import CategoryProduct from "../component/carousel/Productcategory";

class Category2 extends Component {
    render() {

        const {location} = this.props;
        return (
            <div>
                <Navbar/>
                <CategoryProduct ctg={location.search} />
            </div>
        )
    }

}

export default Category2;
