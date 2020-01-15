import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ViewContainer from "./Components/ViewContainer";
import Account from "./Components/Account";
import NewUser from "./Components/NewUserController";
import SignIn from "./Components/SignInController";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

///EEEEEEE
const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { hideProperties: true, newId: "" };
        this.windowDimensions = this.windowDimensions.bind(this);
    }

    saveCookie = url => {
        if (!url.includes("account") && !url.includes("newAccount") && !url.includes("signIn")) {
            if (url.split("/")[1]) {
                document.cookie = `quicklistid=${url.split("/")[1]}`;
            }
        }
    };

    componentDidMount() {
        //history.listen(this.props.pageChange);
        this.saveCookie(history.location.pathname);

        this.windowDimensions();
        window.addEventListener("resize", this.windowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowDimensions);
    }

    // https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
    windowDimensions() {
        if (
            window.innerWidth < 1000 ||
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i)
        ) {
            this.setState({ hideProperties: true });
        } else {
            this.setState({ hideProperties: false });
        }
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router history={history}>
                    <Switch>
                        <Route path="/account">
                            <Account />
                        </Route>
                        <Route path="/newAccount">
                            <NewUser />
                        </Route>
                        <Route path="/signIn">
                            <SignIn />
                        </Route>
                        <Route path="/*">
                            <ViewContainer hideProperties={this.state.hideProperties} />
                        </Route>
                    </Switch>
                </Router>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
