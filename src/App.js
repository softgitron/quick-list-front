import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ViewContainer from "./Components/ViewContainer";
import Account from "./Components/Account";
import NewUser from "./Components/NewUserController";
import SignIn from "./Components/SignInController";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import uuid from "uuid";

///EEEEEEE
const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideProperties: true,
            loggedIn: false
        };
        this.windowDimensions = this.windowDimensions.bind(this);
    }

    saveCookie = url => {
        if (!url.includes("account") && !url.includes("newAccount") && !url.includes("signIn")) {
            if (url.split("/")[1]) {
                console.log("id from url");
                fetch("api/deadline/verifyurl", {
                    method: "POST",
                    body: JSON.stringify({
                        urlid: url.split("/")[1]
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success === false) {
                            console.log(data.message);
                        } else {
                            document.cookie = `quicklistid=${url.split("/")[1]}`;
                        }
                    });
            } else {
                if (!document.cookie.includes("quicklistid=")) {
                    console.log("new cookie");
                    document.cookie = `quicklistid=${uuid.v4()}`;
                }
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
                            <ViewContainer
                                hideProperties={this.state.hideProperties}
                                history={history}
                            />
                        </Route>
                    </Switch>
                </Router>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
