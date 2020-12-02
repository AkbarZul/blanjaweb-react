import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import Mybag from "./MyBag2";
import Checkout from "./CheckOut2"
import Category from "./Category2"
import Addproduct from "./AddProduct"
import Updateproduct from "./Updateproduct"
import Login from "./Login"
import Signup from "./Signup"
import Reset from './Reset';
import Confrim from './Confrim'



export default function Router() {
    return (
       <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id"  component={Product} />
            <Route path="/mybag" component={Mybag} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/category" component={Category} />
            <Route path="/addproduct" component={Addproduct} />
            <Route path="/updateproduct" component={Updateproduct} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/reset" component={Reset} />
            <Route path="/confrim" component={Confrim} />
            
            
       </BrowserRouter>
    )
}
