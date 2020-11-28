import React, { useState } from 'react'


import "./navbar.css";

// class Navbar extends Component {
//     render() {
    const Navbar = props => {
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
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

             <button className="btn  my-2 my-sm-0" type="submit" ><i className="fal fa-filter"></i></button>
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
</div>

        )
    }


export default Navbar;
