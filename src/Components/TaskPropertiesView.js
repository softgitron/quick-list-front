import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { KeyboardTimePicker } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";

// #858585
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
        },
        text: {
            primary: "#ffffff",
            secondary: "#ffffff",
            hint: "#ffffff"
        },
        background: {
            paper: "#858585",
            default: "#858585"
        },
        contrastThreshold: 3,
        tonalOffset: 0
    },
    action: {
        active: "#ffffff",
        hover: "#ffffff)",
        hoverOpacity: 0.08,
        selected: "#ffffff",
        disabled: "#ffffff",
        disabledBackground: "#ffffff"
    },
    overrides: {
        MuiPickersBasePicker: {
            container: {
                marginLeft: "auto",
                marginRight: "auto"
            }
        }
    }
});

/*
#F44336
#4CAF50
*/
const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
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
        background: "linear-gradient(90deg, #666666 0%, #f56c62 30%, #72b074 70%, #666666 100%)"
    },
    time: {
        padding: "8px",
        paddingBottom: "4px",
        width: "100%",
        background: "#858585"
    },
    textField: {
        background: "#858585"
    }
}));

export default function ClippedDrawer(props) {
    const classes = useStyles();
    const [date, changeDate] = useState(new Date());
    const [time, changeTime] = useState(new Date());

    return (
        <>
            <ThemeProvider theme={theme}>
                <List>
                    <ListItem>
                        <Typography variant="h5">New task</Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            error={
                                false /*https://stackoverflow.com/questions/35901440/how-to-invalidate-a-textfield-in-material-ui*/
                            }
                            id="titleField"
                            className={classes.textField}
                            onChange={props.onChange}
                            label="Title"
                            helperText=""
                            variant="filled"
                            fullWidth={true}
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="detailsField"
                            className={classes.textField}
                            onChange={props.onChange}
                            label="Details"
                            multiline
                            rows="5"
                            variant="filled"
                            fullWidth={true}
                        />
                    </ListItem>
                    <ListItem style={{ paddingBottom: "2px" }}>
                        <Typography variant="body1">Priority:</Typography>
                    </ListItem>
                    <ListItem>
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
                    </ListItem>
                    <ListItem style={{ paddingBottom: "0px" }}>
                        <Typography variant="body1">{"Time & Date"}:</Typography>
                    </ListItem>
                    <ListItem style={{ paddingTop: "0px" }}>
                        <KeyboardTimePicker
                            ampm={false}
                            margin="normal"
                            id="time-picker"
                            className={classes.time}
                            value={time}
                            onChange={newTime => {
                                changeTime(newTime);
                                props.onChange({ id: "timePicker", date: newTime });
                            }}
                            KeyboardButtonProps={{
                                "aria-label": "change time"
                            }}
                        />
                    </ListItem>
                    <ListItem alignItems="center">
                        <Container disableGutters={true}>
                            <DatePicker
                                autoOk
                                orientation="portrait"
                                variant="static"
                                openTo="date"
                                disableToolbar="true"
                                value={date}
                                onChange={newDate => {
                                    changeDate(newDate);
                                    props.onChange({ id: "datePicker", date: newDate });
                                }}
                            />
                        </Container>
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
            </ThemeProvider>
        </>
    );
}
