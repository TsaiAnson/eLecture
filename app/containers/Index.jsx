import React, { Component } from 'react';
import { Button, ButtonToolbar, Grid, Jumbotron } from 'react-bootstrap';

import Navbar from '../components/Navbar';

class Index extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Jumbotron bsClass="text-center" style={{backgroundColor: 'white'}}>
                    <Grid>
                        <img alt="Picture" height="150px"/>
                        <h1>eLecture</h1>
                        <h4>Make lectures more engaging</h4>
                        <ButtonToolbar style={{display: 'inline-block'}}>
                            <Button bsClass="btn btn-outline-info" href="https://github.com/TsaiAnson/eLecture">View on GitHub</Button>
                            <Button bsStyle="info">Learn More</Button>
                        </ButtonToolbar>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }

}

export default Index;
