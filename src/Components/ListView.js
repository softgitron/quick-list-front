import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

import ListObject from "./ListViewObject";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function ListView() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListObject
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
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF3333"}
            />
        </List>
    );
}
