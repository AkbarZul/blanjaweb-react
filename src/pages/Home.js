import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                 <div class="shadow p-3 mb-5 bg-white rounded">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
            <div class="container">
                <div class="blue">
                    <img src="/assets/Vector.png" alt=""/>
                    <h1>Blanja</h1>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                
      
                <span class="navbar-toggler-icon"></span>
    </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div class="red">
                        <i class="far fa-search icon"></i>
                        <input type="text" name="" id="search" placeholder="Search"/>
                    </div>

                    <button class="btn  my-2 my-sm-0" type="submit"><i class="fal fa-filter"></i></button>
                    <div class="navbar-nav ml-auto"></div>
                    <div class="shopping">
                        <img src="/assets/shopping-cart (2) 1.png" alt=""/>
                    </div>
                    <div class="login">
                        <button onclick="window.location.href='login.html'">Login</button>
                    </div>
                    <div class="signup">
                        <button onclick="window.location.href='signup.html'">Sign Up</button>
                    </div>
                </div>
            </div>

        </nav>
    </div>


    <section>
        <div class="container">
            <div class="row benjamin">
                <div class="col-lg-1 col-md-6 col-sm-6 mb-5" style={{width: "455px", height: "180px"}}>
                    

                    <img src="/assets/card3.jpeg" alt="" style={{width: "100%", fit: "cover", height: "180px", radius: "12px"}}/>
                </div>
                <div class=" col-lg-5 col-sm-6 col-md-6 mb-5" style={{width: "455px", height: "180px"}}>
                    

                    <img src="assets/card1.jpg" alt="" style={{width: "100%", height: "180px", radius: "12px;"}}/>
                    <h3>Trends in 2020</h3>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-6 mb-5" style={{width: "455px", height: "180px;"}}>
                    

                    <img src="/assets/card2.jpeg" alt=" " style={{width: "100%", height: "180px", radius: "12px;"}}/>
                    <h3>Black edition</h3>
                </div>
                <div class="col-lg-1 col-md-6 col-sm-6 mb-5 " style={{width: "455px", height: "180px"}}>
                    

                    <img src="/assets/card4.jpeg " alt=" " style={{position: "15% 0", width: "100%", fit: "cover", radius: "10px", height: "180px"}}/>
                </div>
            </div>
            
            <div class="category ">
                <h2>Category</h2>
                <h4>What are you currently looking for</h4>
            </div>
            <center>
                <div class="row justify-content-center info ">
                    <div class="col-xs-2 tshirt mb-5 " style={{backgroundColor: "brown", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 15.png " alt=" "/>
                        <h5>t-shirt</h5>
                    </div>
                    <div class="col-xs-2 pants mb-5 " style={{backgroundColor: "black", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 21.png " alt=" "/>
                        <h5>shorts</h5>
                    </div>
                    <div class="col-xs-2 jacket mb-5 " style={{backgroundColor: "blue", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 22.png " alt=" "/>
                        <h5>jacket</h5>
                    </div>
                    <div class="col-xs-2 levis mb-5" style={{backgroundColor: "salmon", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 26.png " alt=" "/>
                        <h5>pants</h5>
                    </div>
                    <div class="col-xs-2 shoes mb-5 " style={{backgroundColor: "green", width: "206px", height: "220px"}}>
                        <img src="/assets/hiclipart 34.png " alt=" "/>
                        <h5>shoes</h5>
                    </div>
                </div>
            </center>
            <div class="category ">
                <h2>New</h2>
                <h4>You’ve never seen it before!</h4>
            </div>
            <div class="row justify-content-center info2 ">
                <div class="col-xs-2 suit1 mb-5">
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5" >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5" >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
            </div>


            <div class="category ">
                <h2>Popular</h2>
                <h4>Find clothes that are trending recently</h4>
            </div>
            <div class="row justify-content-center info2 ">
                <div class="col-xs-2 suit1 mb-5" >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5" >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 " >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5" >
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                    <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                    <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
                <div class="col-xs-2 suit1 mb-5 ">
                    <div class="card ">
                        <img src="/assets/jas.jpeg " alt=" " style={{width: "205px", height: "150px" }}/>
                        <h5>Mens format suit -</h5>
                        <h5>Black & White</h5>
                        <h6>$ 40.0</h6>
                        <p>Zalora Cloth</p>
                        <img src="/assets/Rating 5 stars.png " alt=" " style={{width: "95px", height: "14px", left: "7px", bottom: "5px" }}/>
                    </div>
                </div>
            </div>
           
        </div>



    </section>
            </div>
        )
    }
}


