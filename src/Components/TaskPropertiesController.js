import React, { Component } from "react";
import TaskPropertiesView from "./TaskPropertiesView";
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = "25vw";

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#666666"
    }
});
//REEEEE
class TaskPropertiesController extends Component {
    constructor(props) {
        super(props);
        this.createDeadlineButton = this.createDeadlineButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            titleField: "",
            detailsField: ""
        };
    }

    createDeadlineButton() {
        console.log(this.state.titleField);
        console.log(this.state.detailsField);
    }

    handleChange(e, val) {
        if (e.target.type === "checkbox") {
            this.setState({ [e.target.id]: e.target.checked });
        } else if (e.target.type === "text" || e.target.type === "textarea") {
            this.setState({ [e.target.id]: e.target.value });
        } else {
            if (e.target.parentElement.id) {
                this.setState({ [e.target.parentElement.id]: val });
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <TaskPropertiesView
                        createButton={this.createDeadlineButton}
                        onChange={this.handleChange}
                    />
                </Drawer>
            </>
        );
    }
}

export default withStyles(styles)(TaskPropertiesController);
