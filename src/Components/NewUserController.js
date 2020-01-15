import React, { Component } from "react";
import NewUserView from "./NewUserView";

class NewUserController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    sendEmail = () => {
        console.log("Mitä mun pitäis tehdä? T: Sign in with QR-code");
        let thecookie;
        if (document.cookie) {
            thecookie = document.cookie.split("quicklistid=")[1].split(";")[0];
        }
        fetch("api/deadline/sendemail", {
            method: "POST",
            body: JSON.stringify({
                listid: thecookie,
                email: this.state.email,
                url: "nettisivu/"
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                alert("We have sent you and email");
            });
    };

    textChange = e => {
        this.setState({ email: e.target.value });
    };

    render() {
        return (
            <>
                <NewUserView sendEmail={this.sendEmail} emailChange={this.textChange} />
            </>
        );
    }
}

export default NewUserController;
