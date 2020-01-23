import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignInView from "./SignInView";

class SignInController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givenId: "",
            redirect: false
        };
        this.updateQr = this.updateQr.bind(this);
    }

    loadCookie = () => {
        console.log("loadcookie");
        if (this.state.givenId !== "") {
            //let date = new Date();
            //date.setTime(+date + 365 * 1000 * 60 * 60 * 24);
            //document.cookie = `quicklistid=${this.state.givenId}; expires=${date.toGMTString()};`;
            this.setState({ redirect: true });
        } else {
            alert("Insert a valid id");
        }

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
        this.setState({ givenId: e.target.value });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/${this.state.givenId}`} />
        } else {
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
}

export default SignInController;
