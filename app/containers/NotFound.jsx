import React, { Component } from 'react';
import { Button, Grid } from 'react-bootstrap';

class NotFound extends Component {

    render() {
        return (
            <Grid>
                <h3>Not Found</h3>
                <Button bsClass="btn btn-outline-info" onClick={this.props.history.goBack}>Back</Button>
            </Grid>
        );
    }

}

export default NotFound;
