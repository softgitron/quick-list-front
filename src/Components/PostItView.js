import React, { useState, useEffect, useCallback } from "react";

import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Draggable from "react-draggable";

// background: props.color

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
        console.log(Math.abs(val.lastX / props.sizex));
        console.log(Math.abs(val.lastY / props.sizey));
    };

    return (
        <Draggable bounds="parent" onStop={handleStop} defaultPosition={{ x: props.x, y: props.y }}>
            <div className="box" style={postItStyle}>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="subtitle1">{props.desc}</Typography>
                <Typography variant="subtitle2">{props.date}</Typography>
                <br />
                <div style={buttonStyle}>
                    <Checkbox
                        //className={classes.checkBox}
                        color={"primary"}
                        checked={props.checked}
                        onChange={() => {
                            console.log("Mitä mun pitäis tehdä? T: checkbox");
                        }}
                        value="primary"
                    />
                    <IconButton
                        aria-label="delete"
                        //className={classes.margin}
                        //classes={{ label: classes.buttons }}
                    >
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </Draggable>
    );
}
