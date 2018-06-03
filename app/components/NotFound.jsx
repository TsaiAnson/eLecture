import React, { PureComponent } from "react";
import { Button } from "react-bootstrap";

class NotFound extends PureComponent {

    render() {
        return (
            <div>
                <h2>Not Found</h2>
                <Button bsClass="btn btn-outline-info" onClick={this.props.history.goBack}>Back</Button>
            </div>
        );
    }

}

export default NotFound;
