import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ViewContainer from "./Components/ViewContainer";

///EEEEEEE
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
                        <ViewContainer />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
