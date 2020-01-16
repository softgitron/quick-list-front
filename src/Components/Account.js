import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © Quick List "}

            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

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
            light: "#009688",
            main: "#FFFFFF",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#ffcc00"
        }
    }
});

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#009688"
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 0),
        color: "white",
        background: "#009688",
        "&:hover": {
            background: "#009688"
        }
    },
    back: {
        margin: theme.spacing(3, 0, 0),
        color: "white",
        background: "#858585",
        "&:hover": {
            background: "#858585"
        }
    },
    cancel: {
        textAlign: "right"
    }
}));

export default function Account() {
    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <IconButton
                    component={RouterLink}
                    to={"/"}
                    color="secondary"
                    aria-label="Close account page."
                    className={classes.cancel}
                >
                    <CancelIcon color={"primary"} />
                </IconButton>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon color={"secondary"} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Share
                        </Typography>
                        <div className={classes.form}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                component={RouterLink}
                                to={"/signIn"}
                            >
                                Load tasks with a code
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                component={RouterLink}
                                to={"/newAccount"}
                            >
                                Share link to task list
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.back}
                                component={RouterLink}
                                to={"/"}
                            >
                                Go back
                            </Button>
                        </div>
                    </div>
                    <Box mt={3}>
                        <Copyright />
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
