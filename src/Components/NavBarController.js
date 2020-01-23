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

    loadListHandler = (e) => {
        this.props.loadList(this.props.sortbydate, e.target.value);

    }

    handleButtonPress() { }
    render() {
        return <NavBarView loadListHandler={this.loadListHandler} />;
    }
}

export default NavBarController;
