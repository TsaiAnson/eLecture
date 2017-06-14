import React, { Component } from 'react';

import Navbar from '../components/Navbar';

class Index extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div className="jumbotron text-center" style={{backgroundColor: 'white'}}>
                    <div className="container">
                        <img alt="Picture" height="150px"/>
                        <h1 className="display-4 mb-3">eLecture</h1>
                        <p className="lead mb-3">Make lectures more engaging</p>
                        <a href="https://github.com/TsaiAnson/eLecture" className="btn btn-outline-info mr-3">View on GitHub</a>
                        <a href="/" className="btn btn-info">Learn More</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Index;
