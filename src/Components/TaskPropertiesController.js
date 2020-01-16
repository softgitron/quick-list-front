import React, { Component } from "react";
import TaskPropertiesView from "./TaskPropertiesView";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

class TaskPropertiesController extends Component {
    constructor(props) {
        super(props);
        this.createDeadlineButton = this.createDeadlineButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
        this.state = {
            titleField: "",
            detailsField: "",
            dateField: new Date(Date.now()),
            timeField: new Date(Date.now()),
            finalDateField: null,
            priorityValue: 3
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
        this.props.renderOnlyProperties(false);
        this.props.createDeadline(
            this.state.titleField,
            this.state.detailsField,
            finalDate,
            this.state.priorityValue
        );
    }

    handleSlider(_, val) {
        this.setState({ priorityValue: val });
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
        } /* else {
            if (!e.target.parentElement) {
            } else if (!e.target.parentElement.id) {
            } else {
                this.setState({ [e.target.parentElement.id]: val });
            }
        }*/
    }

    render() {
        let top;
        if (this.props.hideProperties) {
            top = (
                <IconButton
                    variant="contained"
                    color="primary"
                    style={{ color: "white" }}
                    onClick={() => {
                        this.props.renderOnlyProperties(false);
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
            );
        } else {
            top = <div style={{ height: "64px" }} />;
        }
        return (
            <div style={{ backgroundColor: "#666666", color: "white" }}>
                {top}
                <TaskPropertiesView
                    createButton={this.createDeadlineButton}
                    onChange={this.handleChange}
                    handleSlider={this.handleSlider}
                />
            </div>
        );
    }
}

export default TaskPropertiesController;
