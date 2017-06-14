import React, { Component } from 'react';

class NotFound extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="display-4 mb-3">Not Found</h1>
                <a href="#" className="btn btn-outline-info" onClick={this.props.history.goBack}>Back</a>
            </div>
        );
    }

}

export default NotFound;
