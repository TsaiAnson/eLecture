import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Not Found</h1>
                <p><Link to="/">Go back</Link></p>
            </div>
        );
    }
}

export default NotFound;
