import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const theme = createMuiTheme({
    palette: {
        common: {
            black: "#ffffff"
        },
        primary: {
            light: "#009688",
            main: "#009688",
            dark: "#002884",
            contrastText: "#fff"
        }
    }
});

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: "1vmin",
        marginLeft: "3%",
        marginRight: "3%",
        background: "#ECEFF1"
    },
    cardRoot: {
        paddingTop: "4px",
        paddingBottom: "4px !important"
    },
    date: {
        paddingTop: "3.5vmin",
        textAlign: "right"
    },
    ListItem: {
        paddingTop: "0px",
        paddingBottom: "0px",
        wordBreak: "break-word"
    },
    buttons: {
        color: "#666666",
        fill: "#666666"
    },
    checkBox: {
        width: 36,
        height: 36
    },
    gridCenter: {
        display: "flex"
    },
    margin: {
        paddingLeft: "6px",
        padding: "0px"
    }
}));

export default function ListObject(props) {
    const circleStyle = {
        //marginTop: "20%",
        //marginBottom: "auto",
        marginRight: "0px",
        width: "2em",
        height: "2em",
        background: props.color,
        MozBorderRadius: "2em",
        WebkitBorderRadius: "2em",
        BorderRadius: "2em"
    };
    const classes = useStyles();

    return (
        /*      
        <ListItem>
            <Checkbox
                checked={props.checked}
                onChange={console.log("Mitä mun pitäis tehdä? T: checkbox")}
                value="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
            />
            
            <ListItemText primary={props.desc} secondary={props.date} />
            <div style={circleStyle} />
        </ListItem>
 */
        <ThemeProvider theme={theme}>
            <Card className={classes.card}>
                <CardContent classes={{ root: classes.cardRoot }}>
                    <Grid container spacing={0}>
                        <Grid item lg={1} md={1} xs={1}>
                            <Grid
                                container
                                classes={{ root: classes.gridCenter }}
                                alignItems="center"
                            >
                                <Checkbox
                                    className={classes.checkBox}
                                    color={"primary"}
                                    checked={props.completed}
                                    onChange={() => {
                                        console.log("Mitä mun pitäis tehdä? T: checkbox");
                                        props.toggleCompletion(props.number, !props.completed);
                                    }}
                                    value="primary"
                                />
                            </Grid>
                        </Grid>
                        <Grid item lg={8} md={7} xs={6}>
                            <List>
                                <ListItem classes={{ root: classes.ListItem }}>
                                    <Typography variant="h6">{props.title}</Typography>
                                </ListItem>
                                <ListItem classes={{ root: classes.ListItem }}>
                                    <Typography variant="subtitle1">{props.desc}</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid className={classes.date.toLocaleString()} item lg={2} md={2} xs={2}>
                            <Grid
                                container
                                alignContent="flex-end"
                                alignItems="flex-end"
                                justify="flex-end"
                            >
                                <Typography align={"right"} variant="subtitle2">
                                    {props.date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid classes={{ root: classes.gridCenter }} item lg={1} md={2} xs={3}>
                            <Grid container alignItems="center" justify="flex-end">
                                <div style={circleStyle} />
                                <IconButton
                                    aria-label="delete"
                                    className={classes.margin}
                                    classes={{ label: classes.buttons }}
                                    onClick={() => {
                                        console.log("delete");
                                        props.deleteDeadline(props.number);
                                    }}
                                >
                                    <DeleteIcon fontSize="large" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
