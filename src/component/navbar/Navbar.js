import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
// import "../product/product.css"


import "./navbar.css";

// class Navbar extends Component {
//     render() {
    const Navbar = props => {
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
         <div>
          <div className="shadow p-3 mb-5 bg-white rounded">
 <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
     <div className="container">
         <div className="blue">
             <img src="/assets/Vector.png" alt=""/>
             <h1>Blanja</h1>
         </div>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">

             <div className="red">
                 <i className="far fa-search icon"></i>
                 <input type="text" name="" id="search" placeholder="Search"/>
             </div>
             <Button variant="link" onClick={handleShow}>
             <i className="fal fa-filter"></i>
            </Button>
             <div className="navbar-nav ml-auto"></div>
             <div className="shopping">
             <button className="btn  my-2 my-sm-0">

                 <img src="/assets/shopping-cart (2) 1.png" alt=""/>
             </button>
             </div>
             <div className="login">
                 <button onclick="window.location.href='login.html'">Login</button>
             </div>
             <div className="signup">
                 <button onclick="window.location.href='signup.html'">Sign Up</button>
             </div>
         </div>
     </div>

 </nav>
</div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Modal.Title className="ml-6">Color</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="d-flex">
          <button className="satu mr-3"></button>
                <button className="dua mr-3"></button>
                <button className="tiga mr-3"></button>
                <button className="empat mr-3 "></button>
                <button className="lima mr-3 "></button>
                <button className="enam mr-3 "></button>
                </div>
                </Modal.Body>

                <Modal.Header>
          <Modal.Title className="ml-6">Size</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="d-flex">
          <button className="ukuran2 mr-3">30</button>
                <button className="ukuran2 mr-3">38</button>
                <button className="ukuran2 mr-3">36</button>
                <button className="ukuran2 mr-3">35</button>
                <button className="ukuran2 mr-3">40</button>
                </div>
                </Modal.Body>

                

                <Modal.Header>
          <Modal.Title className="ml-6">Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="d-flex">
          <button className="ukuran1 mr-3">All</button>
                <button className="ukuran1 mr-3">Women</button>
                <button className="ukuran1 mr-3">Men</button>
                </div>
                <div className="d-flex">
                <button className="ukuran1 mr-3 mt-2">Boys</button>
                <button className="ukuran1 mr-3 mt-2">Girls</button>
                </div>
                </Modal.Body>

                
        
        <Modal.Footer>
        <div className="d-flex justify-content-center">
          <Button className="discard mr-3" onClick={handleClose}>
            discard
          </Button>
          <Button className="discard mr-4" onClick={handleClose}>
            apply
          </Button>
          </div>
        </Modal.Footer>
      </Modal>

</div>

        )
    }


export default Navbar;
