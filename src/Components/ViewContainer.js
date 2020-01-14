import React, { Component } from "react";
import NavBarController from "./NavBarController";
import TaskPropertiesController from "./TaskPropertiesController";
import Grid from "@material-ui/core/Grid";
import ListView from "./ListView";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class ViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabStatus: 0,
            listid: "",
            thelist: { objects: [] }
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
                listid: "454a15c5-7f2d-4469-8b8e-2f815ae8114b"
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
        // Tab panel render
        let tabRender;
        const tabStatus = this.state.tabStatus;
        switch (tabStatus) {
            case 0: {
                tabRender = <ListView loadedlist={this.state.thelist.objects} />;
                break;
            }
            case 1: {
                tabRender = <></>;
                break;
            }
        }
        return (
            <>
                <NavBarController />
                <TaskPropertiesController createDeadline={this.createDeadline} />
                <div style={{ height: "64px" }}></div>
                <Grid container spacing={0}>
                    <Grid item xs={3} />
                    <Grid item xs={9}>
                        <Grid container>
                            <Tabs
                                value={this.state.tabStatus}
                                onChange={(_, value) => {
                                    this.setState({ tabStatus: value });
                                }}
                                variant="fullWidth"
                                indicatorColor="primary"
                                style={{ width: "100%" }}
                                TabIndicatorProps={{ style: { backgroundColor: "#009688" } }}
                            >
                                <Tab label="Tasks" />
                                <Tab label="Post-it" />
                            </Tabs>
                            {tabRender}
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default ViewContainer;
