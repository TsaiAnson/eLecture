import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class NotFound extends Component {

    render() {
        return (
            <div>
                <h3>Not Found</h3>
                <Button bsClass="btn btn-outline-info" onClick={this.props.history.goBack}>Back</Button>
            </div>
        );
    }

}

export default NotFound;
