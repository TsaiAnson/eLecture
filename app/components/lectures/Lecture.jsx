import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Row, Col, Button } from 'react-bootstrap';

import io from 'socket.io-client';

class Lecture extends Component {

    constructor(props) {
        super(props);
        this.state = {messages: [], message: ""};
        this.socket = io();

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount(){
        this.socket.on('chat message', function(msg){
            let newMessages = [...this.state.messages];
            newMessages.unshift(msg);
            this.setState({messages: newMessages});
        }.bind(this));
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value});
    }

    sendMessage() {
        this.socket.emit('chat message', this.state.message);
        let newMessages = [...this.state.messages];
        newMessages.unshift(this.state.message);
        this.setState({messages: newMessages, message: ""});
    }

    render() {
        let containerStyle = {
            height: "100%", overflow: "hidden", display: "flex", flexFlow: "column"
        };
        let messagesStyle = {
            flex: "1 1 20%", display: "flex", flexDirection: "column-reverse", overflow: "auto"
        };
        let messageStyle = {
            flex: "1 1 auto", alignSelf: "flex-start", paddingTop: "10px", paddingBottom: "10px"
        };
        return (
            <div style={containerStyle}>
                <div id="messages" style={messagesStyle}>
                    {this.state.messages.map((msg, index) => (
                        <div style={messageStyle} key={index}>{msg}</div>
                    ))}
                </div>
                <Form style={{flex: "0 0 80%"}}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text"
                                         value={this.state.message}
                                         onChange={this.handleChangeMessage}/>
                            <InputGroup.Button>
                                <Button className="btn-inline" onClick={this.sendMessage}>Send</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Lecture;
