import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ViewContainer from "./Components/ViewContainer";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

///EEEEEEE
const history = createBrowserHistory();

class App extends Component {
    componentDidMount() {
        history.listen(this.props.pageChange);
    }
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router history={history}>
                    <Switch>
                        <Route path="/*">
                            <ViewContainer />
                        </Route>
                    </Switch>
                </Router>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
