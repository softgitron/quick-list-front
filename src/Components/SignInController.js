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
        document.cookie = `quicklistid=${this.state.givenid}`;
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
