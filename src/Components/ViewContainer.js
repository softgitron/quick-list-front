import React, { Component } from "react";
import NavBarController from "./NavBarController";
import TaskPropertiesController from "./TaskPropertiesController";
import Grid from "@material-ui/core/Grid";
import ListView from "./ListView";
import { withStyles } from "@material-ui/styles";

const classes = theme => ({
    gridCell: {
        background: "#666666",
        padding: "0px"
    }
});

class ViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listid: "",
            thelist: null
        };
    }

    createDeadline = (listid, title, info, date, severity) => {
        console.log("load");
        fetch("api/deadline/create", {
            method: "POST",
            body: JSON.stringify({
                listid: listid,
                title: title,
                info: info,
                date: date,
                severity: severity
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert(data.message);
                } else {
                    console.log(data.message);
                    this.loadList();
                }
            });
    };

    loadList = listid => {
        fetch("/api/deadline/load", {
            method: "POST",
            body: JSON.stringify({
                listid: "72337789-2c68-4025-bef0-454ddee82ec0"
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert(data.message);
                } else {
                    this.setState({ thelist: data.foundlist });
                    console.log(data.foundlist);
                }
            });
    };

    componentDidMount() {
        this.loadList();
    }
    render() {
        return (
            <>
                <NavBarController />
                <TaskPropertiesController />
                <div style={{ height: "4em" }}></div>
                <Grid container spacing={0}>
                    <Grid item xs={3} />
                    <Grid item xs={9}>
                        <Grid container>
                            <ListView />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(classes)(ViewContainer);
