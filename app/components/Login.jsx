import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#login-modal">Login</button>
                <div className="modal" id="login-modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group row">
                                    <label htmlFor="sid" className="col-sm-4 col-form-label text-sm-right">Student ID</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="sid" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="username" className="col-sm-4 col-form-label text-sm-right">Username</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="username" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.toggle}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
