import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListObject from "./ListViewObject";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccessTime from "@material-ui/icons/AccessTime";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        paddingTop: "0px"
    },
    toggle: {
        paddingRight: "8px"
    },
    toggleGroup: {
        marginBottom: "24px",
        marginTop: "16px"
    },
    sortTitle: {
        margin: "auto"
    },
    button: {
        marginBottom: "16px",
        marginTop: "8px",
        marginLeft: "24px",
        color: "white",
        background: "#009688",
        "&:hover": {
            background: "#009688"
        }
    }
}));

export default function ListView(props) {
    const [order, changeorder] = useState("left");

    const classes = useStyles();
    const circleColor = ["#b60a1c", "#ff684c", "#e39802", "#8ace7e", "#309143"];
    const deadlines = props.loadedlist.map(item => (
        <ListObject
            key={"Tasks" + item.number}
            number={item.number}
            title={item.title}
            desc={item.info}
            date={item.date ? item.date.slice(0, 16).replace("T", " ") : ""}
            color={circleColor[item.priority - 1]}
            completed={item.completed}
            toggleCompletion={props.toggleCompletion}
            deleteDeadline={props.deleteDeadline}
        />
    ));

    /*     function toggleCompletion(number, completed) {
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
                        props.loadList(props.sortbydate);
                    }
                });
        }
    
        function deleteDeadline(number) {
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
                        props.loadList(props.sortbydate);
                    }
                });
        } */

    let button;
    if (props.hideProperties) {
        button = (
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                    props.renderOnlyProperties(true);
                }}
            >
                New Task
            </Button>
        );
    }

    return (
        <List className={classes.root}>
            <ToggleButtonGroup
                className={classes.toggleGroup}
                value={order}
                exclusive
                onChange={(event, newAlignment) => {
                    if (newAlignment !== null) {
                        changeorder(newAlignment);
                        props.changesort(newAlignment);
                    }
                }}
                aria-label="text alignment"
            >
                <Typography className={classes.sortTitle} variant="body1">
                    Sort by:
                </Typography>
                <ToggleButton value="left" aria-label="left aligned">
                    <Typography className={classes.toggle} variant="body2">
                        Date
                    </Typography>
                    <CalendarTodayIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="centered">
                    <Typography className={classes.toggle} variant="body2">
                        Priority
                    </Typography>
                    <AccessTime />
                </ToggleButton>
            </ToggleButtonGroup>
            {button}
            {deadlines}
            {/*<ListObject
                title={"Tämä on testi"}
                desc={"lorem ipsum diiba daaba"}
                date={"13.1.2020"}
                color={"#66FF2C"}
            />
            <ListObject
                title={"Tämä on testi2!"}
                desc={"Tämän piti olla jo tänään valmis!"}
                date={"14.1.2020"}
                color={"#FF512C"}
            />*/}
        </List>
    );
}
