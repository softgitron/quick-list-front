import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListObject from "./ListViewObject";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        paddingTop: "0px"
    },
    object: {
        padding: { "padding-bottom": "100px" }
    }
}));

export default function ListView(props) {
    const classes = useStyles();
    const circleColor = ["#b60a1c", "#ff684c", "#e39802", "#8ace7e", "#309143"];
    const deadlines = props.loadedlist.map(item => (
        <ListObject
            className={classes.object}
            title={item.title + " " + item.severity}
            desc={item.info}
            date={item.date ? item.date.slice(0, 16).replace("T", " ") : ""}
            color={circleColor[item.severity - 1]}
        />
    ));

    return (
        <List className={classes.root}>
            {deadlines}
            <ListObject
                className={classes.object}
                title={"Tämä on testi"}
                desc={"lorem ipsum diiba daaba"}
                date={"13.1.2020"}
                color={"#33FCFF"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
                className={classes.object}
            />
        </List>
    );
}
