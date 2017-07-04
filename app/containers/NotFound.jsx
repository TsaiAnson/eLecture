import React, { Component } from 'react';
import { Button, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        const { dispatch } = this.props;
        dispatch(goBack());
    }

    render() {
        return (
            <Grid>
                <h3>Not Found</h3>
                <Button bsClass="btn btn-outline-info" onClick={this.goBack}>Back</Button>
            </Grid>
        );
    }

}

export default connect()(NotFound);
