import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import Lecture from '../components/lectures/Lecture';

class Lectures extends Component {

    render() {
        console.log('here');
        return (
            <Switch>
                <Route exact path="/app/lectures/:lectureId" render={() => <Lecture lecture={this.props.lecture}/>}/>
            </Switch>
        );
    }

}

function mapStateToProps(state) {
    return {
        // lecture: state.lecture.lecture
    }
}

export default connect(mapStateToProps)(Lectures);
