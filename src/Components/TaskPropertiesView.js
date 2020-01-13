import React from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const theme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: "#009688"
            },
            track: {
                color: "#009688"
            },
            rail: {
                color: "white"
            }
        }
    }
});

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    textField: {
        background: "#858585",
        color: "white"
    },
    label: {
        color: "white"
    },
    title: {
        color: "white"
    },
    input: {
        background: "#858585 !important",
        color: "white !important",
        borderColor: "white"
    },
    inputFocused: {
        color: "white !important",
        borderColor: "white"
    },
    greenButton: {
        color: "white",
        background: "#4CAF50"
    },
    redButton: {
        color: "white",
        background: "#EF5350"
    },
    priority: {
        colorPrimary: "white",
        background: "linear-gradient(45deg, #F44336 0%, #4CAF50 100%)"
    }
}));

export default function ClippedDrawer(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.toolbar} />
            <List>
                <ListItem>
                    <Typography className={classes.title} variant="h5">
                        New task
                    </Typography>
                </ListItem>
                <ListItem>
                    <TextField
                        error={
                            false /*https://stackoverflow.com/questions/35901440/how-to-invalidate-a-textfield-in-material-ui*/
                        }
                        FormHelperTextProps={{ className: classes.label }}
                        InputLabelProps={{
                            className: classes.label,
                            classes: { focused: classes.inputFocused }
                        }}
                        InputProps={{
                            className: classes.input,
                            classes: { focused: classes.input }
                        }}
                        id="titleField"
                        onChange={props.onChange}
                        label="Title"
                        helperText=""
                        variant="filled"
                        fullWidth={true}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        FormHelperTextProps={{ className: classes.label }}
                        InputLabelProps={{
                            className: classes.label,
                            classes: { focused: classes.inputFocused }
                        }}
                        InputProps={{
                            className: classes.input,
                            classes: { focused: classes.input }
                        }}
                        id="detailsField"
                        onChange={props.onChange}
                        label="Details"
                        multiline
                        rows="5"
                        variant="filled"
                        fullWidth={true}
                    />
                </ListItem>
                <ListItem style={{ paddingBottom: "2px" }}>
                    <Typography className={classes.title} variant="body1">
                        Priority:
                    </Typography>
                </ListItem>
                <ListItem>
                    <ThemeProvider theme={theme}>
                        <Slider
                            id="priorityValue"
                            onChange={props.onChange}
                            className={classes.priority}
                            defaultValue={3}
                            aria-labelledby="discrete-slider"
                            aria-label="Priority"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={5}
                        />
                    </ThemeProvider>
                </ListItem>
                <ListItem>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <Button className={classes.redButton} variant="contained">
                                    Reset
                                </Button>
                                <Button
                                    className={classes.greenButton}
                                    variant="contained"
                                    onClick={props.createButton}
                                >
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </>
    );
}
