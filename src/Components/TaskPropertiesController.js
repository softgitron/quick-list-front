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
        background: "#666666",
        color: "#FFFFFF"
    }
});

class TaskPropertiesController extends Component {
    constructor(props) {
        super(props);
        this.createDeadlineButton = this.createDeadlineButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            titleField: "",
            detailsField: "",
            dateField: new Date(Date.now()),
            timeField: new Date(Date.now()),
            finalDateField: null,
            priorityValue: null
        };
    }

    createDeadlineButton() {
        const finalDate = new Date(
            this.state.dateField.getFullYear(),
            this.state.dateField.getMonth(),
            this.state.dateField.getDate(),
            this.state.timeField.getHours(),
            this.state.timeField.getMinutes(),
            this.state.timeField.getSeconds()
        );
        this.setState({ finalDateField: finalDate });
        this.props.createDeadline(
            "454a15c5-7f2d-4469-8b8e-2f815ae8114b",
            this.state.titleField,
            this.state.detailsField,
            finalDate,
            this.state.priorityValue
        );
    }

    handleChange(e, val) {
        //console.log(e);
        if (e.id) {
            if (isNaN(e.date)) {
            } else if (e.id === "timePicker") {
                this.setState({ timeField: e.date });
            } else if (e.id === "datePicker") {
                this.setState({ dateField: e.date });
            }
        } else if (e.target.type === "checkbox") {
            this.setState({ [e.target.id]: e.target.checked });
        } else if (e.target.type === "text" || e.target.type === "textarea") {
            this.setState({ [e.target.id]: e.target.value });
        } else {
            if (!e.target.parentElement) {
            } else if (!e.target.parentElement.id) {
            } else {
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
