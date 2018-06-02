import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { persistStore, autoRehydrate } from "redux-persist";
import { compose, createStore, applyMiddleware } from "redux";

import Routes from "./Routes";

import promise from "./api/promise";
import rootReducer from "./reducers/app";

import "../public/assets/css/app.css";

class App extends PureComponent {

    constructor(props) {
        super(props);

        const browserHistory = createBrowserHistory();
        const middleware = [
            promise,
            process.env.NODE_ENV === "development" && createLogger()
        ].filter(Boolean);
        const store = createStore(rootReducer, compose(applyMiddleware(...middleware), autoRehydrate()));

        this.state = { browserHistory: browserHistory, store: store, rehydrated: false };
    }

    componentWillMount(){
        persistStore(this.state.store, {}, () => {
            this.setState({ rehydrated: true });
        });
    }


    render() {
        if (this.state.rehydrated) {
            return (
                <Provider store={this.state.store}>
                    <Router history={this.state.browserHistory}>
                        <Routes/>
                    </Router>
                </Provider>
            );
        } else {
            return null;
        }
    }

}

ReactDOM.render(<App/>, document.getElementById("app"));
