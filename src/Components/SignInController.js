import React, { Component } from "react";
import SignInView from "./SignInView";

class SignInController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givenid: ""
        };
    }

    loadCookie = () => {
        console.log("loadcookie");
        let date = new Date();
        date.setTime(+date + 365 * 1000 * 60 * 60 * 24);
        document.cookie = `quicklistid=${this.state.givenid}; expires=${date.toGMTString()};`;
    };

    textChange = e => {
        this.setState({ givenid: e.target.value });
    };

    render() {
        return (
            <>
                <SignInView idChange={this.textChange} loadCookie={this.loadCookie} />
            </>
        );
    }
}

export default SignInController;
