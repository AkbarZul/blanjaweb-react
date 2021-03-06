import React, { Component } from 'react'

class Rating extends Component {
    render() {
        const {product_rating} = this.props
        let a = '';
        for(let i = 0; i< product_rating; i++){
            a += i
        }
        let lop = a.split('')
        return (
            <div>
                 <div className="d-flex">
                <div className="rate">
                    {lop.map((data) => {
                        return <img src="/assets/Star.png " alt="" />
                    })}
                </div>
                <p className="text-muted rate-num" >({product_rating})</p>
            </div>
            </div>
        )
    }
}

export default Rating;
