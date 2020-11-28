import React, { Component } from 'react';
import PopularData from './Populardata';
import './new.css'

class Popular extends Component {
    render() {
        return (
            <>
                <section>
        <div className="container">
            <h2 className="part-section">Popular</h2>
            <p>Find clothes that are trending recently</p>
        </div>
    </section>

    <article>
        <div className="container">
            <div className="row d-flex flex-row justify-content-center">
                <PopularData />
            </div>
        </div>
    </article>
            </>
        )
    }
}

export default Popular;
