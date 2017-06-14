import React, { Component } from 'react';
import { Button, ButtonToolbar, Col, Grid, Jumbotron } from 'react-bootstrap';

import Navbar from '../components/Navbar';

class Index extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Grid>
                    <Col md={7} sm={8} mdPush={5} smPush={4}>
                        <Jumbotron style={{backgroundColor: 'white', textAlign: 'center'}}>
                            <p style={{fontSize: '36px'}}>Make lectures more engaging.</p>
                            <p>eLecture lets you engage with students during lectures so you can teach more - and the students can learn more.</p>
                            <ButtonToolbar style={{display: 'inline-block'}}>
                                <Button bsClass="btn btn-outline-info" href="https://github.com/TsaiAnson/eLecture">View on GitHub</Button>
                                <Button bsStyle="info">Learn More</Button>
                            </ButtonToolbar>
                        </Jumbotron>
                    </Col>
                    <Col md={5} sm={4} mdPull={5} smPull={8}>
                        <img alt="Picture"/>
                    </Col>
                </Grid>
            </div>
        );
    }

}

export default Index;
