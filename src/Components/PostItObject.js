import React from "react";

import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Draggable from "react-draggable";

// background: props.color

const theme = createMuiTheme({
    palette: {
        common: {
            black: "#ffffff"
        },
        primary: {
            light: "rgba(0, 0, 0, 0.54)",
            main: "rgba(0, 0, 0, 0.54)",
            dark: "rgba(0, 0, 0, 0.54)",
            contrastText: "#fff"
        }
    }
});

export default function PostItView(props) {
    const postItStyle = {
        //marginTop: "20%",
        //marginBottom: "auto",
        padding: "4px",
        width: "15em",
        //height: "12em",
        background: props.color,
        borderColor: "#575757",
        borderStyle: "solid",
        borderWidth: "1px"
    };

    const buttonStyle = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        flexDirection: "row",
        alignItems: "flex-end"
    };

    const handleStop = (ev, val) => {
        let dataObject = {
            number: props.number,
            title: props.title,
            info: props.desc,
            priority: props.priorityRaw,
            date: props.dateRaw,
            x: Math.abs(val.lastX / props.sizex),
            y: Math.abs(val.lastY / props.sizey)
        };
        console.log("x & y: ", dataObject.x, dataObject.y);
        props.updatePost(dataObject);
    };

    return (
        <Draggable bounds="parent" onStop={handleStop} defaultPosition={{ x: props.x, y: props.y }}>
            <div className="box" style={postItStyle}>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="subtitle1">{props.desc}</Typography>
                <Typography variant="subtitle2">{props.date}</Typography>
                <br />
                <div style={buttonStyle}>
                    <ThemeProvider theme={theme}>
                        <Checkbox
                            //className={classes.checkBox}
                            color={"primary"}
                            checked={props.completed}
                            onChange={() => {
                                console.log("Mitä mun pitäis tehdä? T: checkbox");
                                props.toggleCompletion(props.number, !props.completed);
                            }}
                            value="primary"
                        />
                    </ThemeProvider>
                    <IconButton
                        aria-label="delete"
                        //className={classes.margin}
                        //classes={{ label: classes.buttons }}
                        onClick={() => {
                            console.log("delete");
                            props.deleteDeadline(props.number);
                        }}
                    >
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </Draggable>
    );
}
