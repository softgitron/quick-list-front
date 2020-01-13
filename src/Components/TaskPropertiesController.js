import React, { Component } from "react";
import TaskPropertiesView from "./TaskPropertiesView";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

class TaskPropertiesController extends Component {
    constructor(props) {
        super(props);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.state = {
            title: ""
        };
    }
    handleButtonPress() {}
    render() {
        return (
            <>
                <Drawer
                    style={{ width: "26em", flexShrink: 0 }}
                    variant="permanent"
                    classes={{
                        paper: { width: "26em" }
                    }}
                >
                    <TaskPropertiesView />
                </Drawer>
            </>
        );
    }
}

export default TaskPropertiesController;
