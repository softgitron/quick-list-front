import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from "react-router-dom";
import QRCode from "qrcode.react";

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
    },
    field: {
        marginTop: "0px"
    }
}));

export default function NewUser(props) {
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
                        <QRCode includeMargin={true} size={200} value={props.qr} />
                        <Typography component="h1" variant="h5">
                            Authentication code
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="email"
                            value={props.code}
                            autoComplete="email"
                        />
                        <div className={classes.form}>
                            <TextField
                                className={classes.field}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={props.emailChange}
                                autoComplete="email"
                                autoFocus
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => {
                                    props.sendEmail();
                                }}
                            >
                                Send code to email
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.back}
                                component={RouterLink}
                                to={"/account"}
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
