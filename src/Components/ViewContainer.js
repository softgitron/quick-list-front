import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import NavBarController from "./NavBarController";
import CreateTaskController from "./CreateTaskController";
import Drawer from "@material-ui/core/Drawer";
import PostItController from "./PostItController";
import ListView from "./ListView";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const drawerWidthDefault = "24em";

const styles = theme => ({
    drawer: {
        width: drawerWidthDefault,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidthDefault,
        background: "#6e6e6e",
        color: "#FFFFFF"
    }
});

class ViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabStatus: 0,
            objects: [],
            onlyProperties: false,
            sortbydate: true
        };
        this.renderOnlyProperties = this.renderOnlyProperties.bind(this);
    }

    createDeadline = (title, info, date, severity) => {
        let thecookie;
        if (document.cookie) {
            thecookie = document.cookie.split("quicklistid=")[1].split(";")[0];
        }
        fetch("api/deadline/create", {
            method: "POST",
            body: JSON.stringify({
                listid: thecookie,
                title: title,
                info: info,
                date: date,
                priority: severity
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    console.log(data.message);
                } else {
                    console.log(data.message);
                    if (data.newId) {
                        let date = new Date();
                        date.setTime(+date + 365 * 1000 * 60 * 60 * 24);
                        document.cookie = `quicklistid=${
                            data.newId
                            }; expires=${date.toGMTString()};`;
                    }
                    this.loadList(this.state.sortbydate);
                }
            });
    };

    toggleCompletion = (number, completed) => {
        let thecookie;
        if (document.cookie) thecookie = document.cookie.split("quicklistid=")[1].split(";")[0];
        fetch("api/deadline/complete", {
            method: "POST",
            body: JSON.stringify({
                listid: thecookie,
                number: number,
                completed: completed
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert(data.message);
                } else {
                    console.log(data.message);
                    this.loadList(this.state.sortbydate);
                }
            });
    };

    updatePost = dataObject => {
        let thecookie;
        if (document.cookie) thecookie = document.cookie.split("quicklistid=")[1].split(";")[0];
        console.log(
            dataObject.title,
            dataObject.info,
            dataObject.priority,
            dataObject.date,
            dataObject.x,
            dataObject.y
        );
        fetch("api/deadline/update", {
            method: "POST",
            body: JSON.stringify({
                listid: thecookie,
                number: dataObject.number,
                title: dataObject.title,
                info: dataObject.info,
                priority: dataObject.priority,
                date: dataObject.date,
                x: dataObject.x,
                y: dataObject.y
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert(data.message);
                } else {
                    console.log(data.message);
                    this.loadList(this.state.sortbydate);
                }
            });
    };

    deleteDeadline = number => {
        let thecookie;
        if (document.cookie) thecookie = document.cookie.split("quicklistid=")[1].split(";")[0];
        fetch("api/deadline/delete", {
            method: "POST",
            body: JSON.stringify({
                listid: thecookie,
                number: number
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert(data.message);
                } else {
                    console.log(data.message);
                    this.loadList(this.state.sortbydate);
                }
            });
    };

    changesort = alignment => {
        console.log(alignment);
        if (alignment === "left") {
            this.setState({ sortbydate: true });
            this.loadList(true);
        } else {
            this.setState({ sortbydate: false });
            this.loadList(false);
        }
    };

    loadList = (sortbydate, searchString) => {
        let sentid;
        const url = this.props.history.location.pathname;
        console.log(document.cookie);
        if (!url.includes("account") && !url.includes("newAccount") && !url.includes("signIn")) {
            //console.log(this.props.history.location.pathname);
            if (url.split("/")[1]) {
                //console.log("split");
                sentid = url.split("/")[1];
            } else {
                //console.log("from cookie");
                sentid = document.cookie.split("quicklistid=")[1];
            }
        } else if (document.cookie) {
            //console.log("from cookie");
            sentid = document.cookie.split("quicklistid=")[1];
        }
        //console.log(sentid);
        fetch("/api/deadline/load", {
            method: "POST",
            body: JSON.stringify({
                listid: sentid,
                sortbydate: sortbydate
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    console.log(data.message);
                } else if (searchString === undefined) {
                    console.log(searchString === undefined);
                    this.setState({ objects: data.objects });
                    console.log(data.objects);
                } else {
                    const newOrder = data.objects.filter(
                        post =>
                            post.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
                    );
                    this.setState({ objects: newOrder });
                }
            });
    };

    componentDidMount() {
        this.changesort("left");
        //this.loadList();
    }

    renderOnlyProperties(value) {
        this.setState({ onlyProperties: value });
    }
    // "Miten toteuttaa siististi sivupalkin katoaminen näyyön koon perusteella"
    render() {
        const { classes } = this.props;
        // Tab panel render
        let tabRender;
        const tabStatus = this.state.tabStatus;
        switch (tabStatus) {
            case 0: {
                tabRender = (
                    <ListView
                        loadedlist={this.state.objects}
                        //loadList={this.loadList}
                        changesort={this.changesort}
                        //sortbydate={this.state.sortbydate}
                        hideProperties={this.props.hideProperties}
                        renderOnlyProperties={this.renderOnlyProperties}
                        toggleCompletion={this.toggleCompletion}
                        deleteDeadline={this.deleteDeadline}
                    />
                );
                break;
            }
            case 1: {
                tabRender = (
                    <PostItController
                        loadedlist={this.state.objects}
                        toggleCompletion={this.toggleCompletion}
                        deleteDeadline={this.deleteDeadline}
                        updatePost={this.updatePost}
                    ></PostItController>
                );
                break;
            }
            default: {
                tabRender = (null);
                break;
            }
        }
        // Mobile view logic
        // CSS meadiaquery (kts miten toimii material-ui kanssa), brake points
        if (this.state.onlyProperties) {
            return (
                <CreateTaskController
                    hideProperties={this.props.hideProperties}
                    renderOnlyProperties={this.renderOnlyProperties}
                    createDeadline={this.createDeadline}
                />
            );
        } else if (this.props.hideProperties) {
            return (
                <>
                    <NavBarController loadList={this.loadList} sortbydate={this.state.sortbydate} />
                    <div style={{ height: "64px" }}></div>
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
                </>
            );
        } else {
            return (
                <>
                    <NavBarController loadList={this.loadList} sortbydate={this.state.sortbydate} />
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        {" "}
                        <CreateTaskController
                            hideProperties={this.props.hideProperties}
                            renderOnlyProperties={this.renderOnlyProperties}
                            createDeadline={this.createDeadline}
                        />
                    </Drawer>

                    <div style={{ height: "64px" }}></div>
                    <div style={{ marginLeft: drawerWidthDefault }}>
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
                    </div>
                </>
            );
        }
    }
}

export default withStyles(styles)(ViewContainer);
