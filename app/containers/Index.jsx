import React, { PureComponent } from "react";
import { Grid } from "react-bootstrap";
import { Switch, Route } from "react-router";

import Home from "../components/Home";
import IndexNavbar from "../components/navbar/IndexNavbar";
import Login from "../components/login/Login";
import NotFound from "../components/NotFound";
import SignUp from "../components/signup/SignUp";

class Index extends PureComponent {

    render() {
        return (
            <div>
                <IndexNavbar/>
                <Grid>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Grid>
            </div>
        );
    }

}

export default Index;
