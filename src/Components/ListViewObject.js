import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

export default function ListObject(props) {
    const circleStyle = {
        width: "100px",
        height: "100px",
        background: props.color,
        MozBorderRadius: "50px",
        WebkitBorderRadius: "50px",
        BorderRadius: "50px"
    };
    return (
        <ListItem>
            <Checkbox
                checked={props.checked}
                onChange={console.log("Mitä mun pitäis tehdä? T: checkbox")}
                value="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="h5">{props.title}</Typography>
            <ListItemText primary={props.desc} secondary={props.date} />
            <div style={circleStyle} />
        </ListItem>
    );
}
