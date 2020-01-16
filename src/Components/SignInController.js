import React, { Component } from "react";
import SignInView from "./SignInView";

class SignInController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givenId: ""
        };
        this.updateQr = this.updateQr.bind(this);
    }

    loadCookie = () => {
        console.log("loadcookie");
        let date = new Date();
        date.setTime(+date + 365 * 1000 * 60 * 60 * 24);
        document.cookie = `quicklistid=${this.state.givenId}; expires=${date.toGMTString()};`;
    };

    updateQr = val => {
        if (val !== null) {
            if (
                val.includes("https://" + window.location.hostname + "/") ||
                val.includes("localhost")
            ) {
                this.setState({ givenId: val.split("/")[3] });
            }
        }
    };

    textChange = e => {
        //this.setState({ givenid: e.target.value });
    };

    render() {
        return (
            <SignInView
                givenId={this.state.givenId}
                idChange={this.textChange}
                loadCookie={this.loadCookie}
                updateQr={this.updateQr}
            />
        );
    }
}

export default SignInController;
