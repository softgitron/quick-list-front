import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBarController from "./Components/NavBarController";
import TaskPropertiesController from "./Components/TaskPropertiesController";

const history = createBrowserHistory();

class App extends Component {
    componentDidMount() {
        history.listen(this.props.pageChange);
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/*">
                        <NavBarController />
                        <TaskPropertiesController />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
