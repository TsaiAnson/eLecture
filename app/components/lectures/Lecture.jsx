import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import io from 'socket.io-client';

class Lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ""};
        this.socket = io();

        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value});
    }

    sendMessage() {
        this.socket.emit('chat message', this.state.message);
        this.setState({message: ""});
    }

    render() {
        return (
            <div>
                <ul id="messages"></ul>
                <Form style={{position: "fixed", bottom: 0}}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text"
                                         value={this.state.message}
                                         onChange={this.handleChangeMessage}/>
                            <InputGroup.Button>
                                <Button onClick={this.sendMessage}>Send</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

Lecture.propTypes = {
    lecture: PropTypes.object.isRequired
};

export default connect()(Lecture);
