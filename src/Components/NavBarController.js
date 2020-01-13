import React, { Component } from "react";
import NavBarView from "./NavBarView";
///RRREEEE
class NavBarController extends Component {
    constructor(props) {
        super(props);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.state = {
            title: ""
        };
    }
    handleButtonPress() {}
    render() {
        return <NavBarView />;
    }
}

export default NavBarController;
