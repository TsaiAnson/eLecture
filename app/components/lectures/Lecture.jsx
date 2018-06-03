import React, { PureComponent, PropTypes } from "react";
import io from "socket.io-client";
import { Form, FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";

const containerStyle = {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    overflow: "hidden",
};
const messagesStyle = {
    display: "flex",
    flexDirection: "column-reverse",
    flex: "1 1 20%",
    overflow: "auto",
};
const messageStyle = {
    flex: "1 1 auto",
    alignSelf: "flex-start",
    paddingTop: "10px",
    paddingBottom: "10px",
};

class Lecture extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: "",
        };
        this.socket = io();

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount(){
        const self = this;
        this.socket.on("chat message", msg => {
            let newMessages = [...self.state.messages];
            newMessages.unshift(msg);
            self.setState({ messages: newMessages });
        });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    sendMessage() {
        this.socket.emit("chat message", this.state.message);
        const newMessages = [...this.state.messages];
        newMessages.unshift(this.state.message);
        this.setState({ messages: newMessages, message: "" });
    }

    render() {
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
