import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import Mybag from "./MyBag2";

export default function Router() {
    return (
       <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id"  component={Product} />
            <Route path="/mybag" component={Mybag} />
            
            
       </BrowserRouter>
    )
}
