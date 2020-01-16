import React, { useState, useEffect, useCallback } from "react";

import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Draggable from "react-draggable";

// background: props.color

// SOURCE!!!!! https://stackoverflow.com/questions/56013531/reactjs-hooks-drag-and-drop-with-multiple-usestate-hooks-and-styled-components
export default function PostItView(props) {
    const [state, setState] = useState({
        isDragging: false,
        translateX: 0,
        translateY: 0
    });
    // mouse move
    const handleMouseMove = useCallback(
        ({ clientX, clientY }) => {
            if (state.isDragging) {
                setState(prevState => ({
                    ...prevState,
                    translateX: clientX,
                    translateY: clientY
                }));
            }
        },
        [state.isDragging]
    );

    // mouse left click release
    const handleMouseUp = useCallback(() => {
        if (state.isDragging) {
            setState(prevState => ({
                ...prevState,
                isDragging: false
            }));
        }
    }, [state.isDragging]);

    useEffect(() => {
        console.log(
            "Lappu numero: ",
            props.number,
            " liikkui (x, y)",
            state.translateX,
            state.translateY
        );
    }, [state.isDragging]);

    // mouse left click hold
    const handleMouseDown = useCallback(() => {
        setState(prevState => ({
            ...prevState,
            isDragging: true
        }));
    }, []);

    // adding/cleaning up mouse event listeners
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

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

    return (
        <Draggable
            bounds="parent"
            onMouseDown={handleMouseDown}
            defaultPosition={{ x: props.x, y: props.y }}
        >
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
