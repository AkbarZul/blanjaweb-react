import React, { Component } from 'react';
import NewData from './Newdata';
import './new.css'

class New extends Component {
    render() {
        return (
            <>
                <section>
        <div className="container">
            <h2 className="part-section">New</h2>
            <p>You've never seen it before</p>
        </div>
    </section>

    <article>
        <div className="container">
            <div className="row d-flex flex-row justify-content-center">
                <NewData />
            </div>
        </div>
    </article>
            </>
        )
    }
}

export default New;
