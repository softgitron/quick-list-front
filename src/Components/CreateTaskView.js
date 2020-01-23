import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
        secondary: {
            light: "#ffffff",
            main: "#ffffff",
            dark: "#ffffff",
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

const theme2 = createMuiTheme({
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
            paper: "#bebebe",
            default: "#bebebe"
        },
        contrastThreshold: 3,
        tonalOffset: 0
    }
});

const radio1 = createMuiTheme({
    palette: {
        secondary: {
            main: "#b60a1c"
        },
        text: {
            secondary: "#ffffff"
        }
    }
});

const radio2 = createMuiTheme({
    palette: {
        secondary: {
            main: "#ff684c"
        },
        text: {
            secondary: "#ffffff"
        }
    }
});

const radio3 = createMuiTheme({
    palette: {
        secondary: {
            main: "#e39802"
        },
        text: {
            secondary: "#ffffff"
        }
    }
});

const radio4 = createMuiTheme({
    palette: {
        secondary: {
            main: "#8ace7e"
        },
        text: {
            secondary: "#ffffff"
        }
    }
});

const radio5 = createMuiTheme({
    palette: {
        secondary: {
            main: "#309143"
        },
        text: {
            secondary: "#ffffff"
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
        background: "linear-gradient(90deg, #6e6e6e 0%, #f56c62 30%, #72b074 70%, #6e6e6e 100%)",
        marginRight: "8px"
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
    const [value, setValue] = React.useState("3");

    const handleChange = event => {
        setValue(event.target.value);
        props.handleRadio(Number(event.target.value));
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <List>
                    <ListItem>
                        <Typography variant="h5">New task</Typography>
                    </ListItem>
                    <ListItem>
                        <Grid container className={classes.root} spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justify="space-between">
                                    <Button
                                        className={classes.redButton}
                                        variant="contained"
                                        onClick={props.resetButton}
                                    >
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
                    <ListItem>
                        <TextField
                            error={
                                false /*https://stackoverflow.com/questions/35901440/how-to-invalidate-a-textfield-in-material-ui*/
                            }
                            id="titleField"
                            color="secondary"
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
                            color="secondary"
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
                        <FormControl component="fieldset">
                            <FormLabel component="legend"></FormLabel>
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={value}
                                onChange={handleChange}
                                row
                            >
                                <Grid container spacing={0}>
                                    <Grid item xs={2}>
                                        <Grid container>
                                            <ThemeProvider theme={radio1}>
                                                <FormControlLabel
                                                    value="1"
                                                    control={<Radio />}
                                                    label="1"
                                                    labelPlacement="top"
                                                />
                                            </ThemeProvider>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container>
                                            <ThemeProvider theme={radio2}>
                                                <FormControlLabel
                                                    value="2"
                                                    control={<Radio className={classes.radio2} />}
                                                    label="2"
                                                    labelPlacement="top"
                                                />
                                            </ThemeProvider>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container>
                                            <ThemeProvider theme={radio3}>
                                                <FormControlLabel
                                                    value="3"
                                                    control={<Radio className={classes.radio3} />}
                                                    label="3"
                                                    labelPlacement="top"
                                                />
                                            </ThemeProvider>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container>
                                            <ThemeProvider theme={radio4}>
                                                <FormControlLabel
                                                    value="4"
                                                    control={<Radio className={classes.radio4} />}
                                                    label="4"
                                                    labelPlacement="top"
                                                />
                                            </ThemeProvider>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container>
                                            <ThemeProvider theme={radio5}>
                                                <FormControlLabel
                                                    value="5"
                                                    control={<Radio className={classes.radio5} />}
                                                    label="5"
                                                    labelPlacement="top"
                                                />
                                            </ThemeProvider>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </ListItem>
                    <ListItem style={{ paddingBottom: "0px" }}>
                        <Typography variant="body1">{"Time & Date"}:</Typography>
                    </ListItem>
                    <ListItem style={{ paddingTop: "0px" }}>
                        <ThemeProvider theme={theme2}>
                            <KeyboardTimePicker
                                ampm={false}
                                margin="normal"
                                color="secondary"
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
                        </ThemeProvider>
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
                </List>
            </ThemeProvider>
        </>
    );
}
