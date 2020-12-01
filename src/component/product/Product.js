import React, { Component } from 'react'
import axios from 'axios';
import { Button } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Newdata from "../body/Newdata"
import Rating from "../rating/Rating";
import "../body/new.css"
import "./product.css";

class Product extends Component {
    

    CreateHistory = async event  => {

        // const { name, price, brand} = this.props;

        // const body = {
        //     product_name: name,
        //     category_name: brand,
        //     product_price: price, 
        // }

        event.preventDefault();
        let res = await axios.post(`http://localhost:1000/history`)
        console.log(res)
        
    }
    render() {
        const {name, desc, price, brand, rating } = this.props
        return (
            <div>
                <Navbar/>
                <div className="container atas">
                    <div className="row">
                        <div className="col-5">
                <img className="img-fluid rounded" src="https://s3-alpha-sig.figma.com/img/f2c7/fd0b/307d95806ea47cf954a9dadb637c8225?Expires=1607299200&Signature=L~7y2NsHI8E0nO23lZ1-NbP66BfbpAFie1Ud8-4wMXhdPrqTTu9WXstIJA2IuT~H1U7dGYJSCjmNdXTkwsYX7R1fUruXMt5iBk5i09DQIis-tw66CMWpBRkm0fWXtHtwjFz0aAEJ1Tt1VqZF7z-18XnH5bgCQAstB-eNQPB1qec8fTsUcdVkfGIG9bTqfUPfrwl-uUl~GUS-Mn2AzvDKMYYNrUjuZ1tyhoFJomln7OXRGLO9AomIao7UAaCerlz8aPkLXxPZePBkMsWN-PqLrbebgFdm5pz9NxZcuXhcreCFIOYM-He64s3Fe1fncfTsW8BOKuTFOf9UjtDhEe5WgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <div className="d-flex">
                            <img className="img-fluid rounded mt-2" src="https://s3-alpha-sig.figma.com/img/f1ef/f107/357f62b3b1f81e5f4b7695aee33c516c?Expires=1607299200&Signature=Mw7svgdL01SwHfB9khwnFsaPY2DA4i4ln8a1~ZIX7uvT1PW2B7O7RAvhw~3UunQIVBl~WYMnK0CS~pGeFhB4rqFwUaAa1USv3H5dLzh6Gde2C11Ior7JNTKJhPD~CqCq2dXYyZuD9svs8wng8gtEYubVyNeWwhEo~T5LSoy8BAX8RrDVdHb-K0HtG80DqnBnBQoIaSjBJ5BTBB1sncVVpQPZplKxph9GW7z8V5jK94Z5~3LfTEzpvzlHGWg4SMMstiPpPMckRo5ZUCXRBCLqEGFLbrvnSHGkNIcht2vW8zUZ1QAPFPsDNDSPMUGcC1r94vfHDFdlz4n3PN4Or6q3yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img" style={{width: "20%", margin: "1px"}}></img>
                            <img className="img-fluid rounded mt-2" src="https://s3-alpha-sig.figma.com/img/f1ef/f107/357f62b3b1f81e5f4b7695aee33c516c?Expires=1607299200&Signature=Mw7svgdL01SwHfB9khwnFsaPY2DA4i4ln8a1~ZIX7uvT1PW2B7O7RAvhw~3UunQIVBl~WYMnK0CS~pGeFhB4rqFwUaAa1USv3H5dLzh6Gde2C11Ior7JNTKJhPD~CqCq2dXYyZuD9svs8wng8gtEYubVyNeWwhEo~T5LSoy8BAX8RrDVdHb-K0HtG80DqnBnBQoIaSjBJ5BTBB1sncVVpQPZplKxph9GW7z8V5jK94Z5~3LfTEzpvzlHGWg4SMMstiPpPMckRo5ZUCXRBCLqEGFLbrvnSHGkNIcht2vW8zUZ1QAPFPsDNDSPMUGcC1r94vfHDFdlz4n3PN4Or6q3yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img" style={{width: "20%", margin: "1px"}}></img>
                            <img className="img-fluid rounded mt-2" src="https://s3-alpha-sig.figma.com/img/f1ef/f107/357f62b3b1f81e5f4b7695aee33c516c?Expires=1607299200&Signature=Mw7svgdL01SwHfB9khwnFsaPY2DA4i4ln8a1~ZIX7uvT1PW2B7O7RAvhw~3UunQIVBl~WYMnK0CS~pGeFhB4rqFwUaAa1USv3H5dLzh6Gde2C11Ior7JNTKJhPD~CqCq2dXYyZuD9svs8wng8gtEYubVyNeWwhEo~T5LSoy8BAX8RrDVdHb-K0HtG80DqnBnBQoIaSjBJ5BTBB1sncVVpQPZplKxph9GW7z8V5jK94Z5~3LfTEzpvzlHGWg4SMMstiPpPMckRo5ZUCXRBCLqEGFLbrvnSHGkNIcht2vW8zUZ1QAPFPsDNDSPMUGcC1r94vfHDFdlz4n3PN4Or6q3yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img" style={{width: "20%", margin: "1px"}}></img>
                            <img  className="img-fluid rounded mt-2" src="https://s3-alpha-sig.figma.com/img/f1ef/f107/357f62b3b1f81e5f4b7695aee33c516c?Expires=1607299200&Signature=Mw7svgdL01SwHfB9khwnFsaPY2DA4i4ln8a1~ZIX7uvT1PW2B7O7RAvhw~3UunQIVBl~WYMnK0CS~pGeFhB4rqFwUaAa1USv3H5dLzh6Gde2C11Ior7JNTKJhPD~CqCq2dXYyZuD9svs8wng8gtEYubVyNeWwhEo~T5LSoy8BAX8RrDVdHb-K0HtG80DqnBnBQoIaSjBJ5BTBB1sncVVpQPZplKxph9GW7z8V5jK94Z5~3LfTEzpvzlHGWg4SMMstiPpPMckRo5ZUCXRBCLqEGFLbrvnSHGkNIcht2vW8zUZ1QAPFPsDNDSPMUGcC1r94vfHDFdlz4n3PN4Or6q3yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img" style={{width: "20%", margin: "1px"}}></img>
                            <img  className="img-fluid rounded mt-2" src="https://s3-alpha-sig.figma.com/img/f1ef/f107/357f62b3b1f81e5f4b7695aee33c516c?Expires=1607299200&Signature=Mw7svgdL01SwHfB9khwnFsaPY2DA4i4ln8a1~ZIX7uvT1PW2B7O7RAvhw~3UunQIVBl~WYMnK0CS~pGeFhB4rqFwUaAa1USv3H5dLzh6Gde2C11Ior7JNTKJhPD~CqCq2dXYyZuD9svs8wng8gtEYubVyNeWwhEo~T5LSoy8BAX8RrDVdHb-K0HtG80DqnBnBQoIaSjBJ5BTBB1sncVVpQPZplKxph9GW7z8V5jK94Z5~3LfTEzpvzlHGWg4SMMstiPpPMckRo5ZUCXRBCLqEGFLbrvnSHGkNIcht2vW8zUZ1QAPFPsDNDSPMUGcC1r94vfHDFdlz4n3PN4Or6q3yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img" style={{width: "20%", margin: "1px"}}></img>
                        </div>
                </div>
                <div className="col-7">
                    <div>
                <p className="name">{ name }</p>
                <Rating product_rating={rating}/>
                <p className="price">Rp. { price }</p>
                <p className="color">Color</p>
                </div>
                <button className="satu mr-3"></button>
                <button className="dua mr-3"></button>
                <button className="tiga mr-3"></button>
                <button className="empat "></button>
                <div className="d-flex">
                <p className="size mr-5 mt-3">Size</p>
                <p className="jumlah mt-3">Jumlah</p>
                </div>
                
                <div className="d-flex">
                <button className="minus mr-2">
                    <p>-</p>
                </button>
                <p className="angka">28</p>
                <button className="plus ml-2">
                    <p>+</p>
                </button>
                <button className="minus2 mr-2">
                    <p>-</p>
                </button>
                <p className="angka">1</p>
                <button className="plus ml-2">
                    <p>+</p>
                </button>
                </div>
                <div className="d-flex">
                <button className="chat mt-3 rounded-pill">
                    chat
                </button>
                <Button className="mybag ml-2 mt-3 rounded-pill">
                    Add bag
                </Button>
                <Button className="buy ml-2 mt-3 rounded-pill" onClick={this.CreateHistory}>
                    Buy Now
                </Button>
                </div>
                
                </div>
                </div>
                <p className="informasi">Informasi Product</p>
                <p className="informasi">Category</p>
                <p className="brand">{ brand }</p>
                <p className="informasi">Description</p>
                <p className="desc">{ desc }</p>
                <p className="informasi">Product Review</p>
                <p className="informasi">5.0</p>
                <Rating product_rating={rating}/>
                <section>
        
            <h2 className="part-section">You can also like this</h2>
            <p>You’ve never seen it before!</p>
        
    </section>

    <article>
        
            <div className="row d-flex flex-row justify-content-center">
                <Newdata />
            </div>
        
    </article>

                
                </div>
            </div>
        )
    }
}

export default Product;
