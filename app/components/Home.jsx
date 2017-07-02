import React, {Component} from 'react';
import { Button, ButtonToolbar, Row, Col, Jumbotron } from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col md={7} sm={8} mdPush={5} smPush={4}>
                        <Jumbotron style={{backgroundColor: 'white', textAlign: 'center'}}>
                            <p style={{fontSize: '36px'}}>Make lectures more engaging.</p>
                            <p>eLecture lets you engage with students during lectures so you can teach more - and the students can learn more.</p>
                            <ButtonToolbar style={{display: 'inline-block'}}>
                                <Button bsClass="btn btn-outline-info">Learn More</Button>
                                <Button bsStyle="info" href="/signup">Get Started</Button>
                            </ButtonToolbar>
                        </Jumbotron>
                    </Col>
                    <Col md={5} sm={4} mdPull={5} smPull={8}>
                        <img alt="Picture"/>
                    </Col>
                </Row>
                <Button bsClass="btn btn-outline-info" href="https://github.com/TsaiAnson/eLecture">View on GitHub</Button>
            </div>
        );
    }

}

export default Home;
