import React, { PureComponent } from "react";
import { Grid } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router";

import Courses from "./Courses";
import AppNavbar from "../components/navbar/AppNavbar";

class App extends PureComponent {

    render() {
        return (
            <div>
                <AppNavbar/>
                <Grid>
                    <Switch>
                        <Route path="/app/courses" component={Courses}/>
                        <Route path="/app" render={() => <Redirect to="/app/courses"/>}/>
                    </Switch>
                </Grid>
            </div>
        );
    }

}

export default App;
