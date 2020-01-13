import React from "react";
import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#009688",
            main: "#009688",
            dark: "#002884",
            contrastText: "#fff"
        },
        secondary: pink,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        zIndex: 1000000
    }
}));

export default function NavBarView() {
    const styles = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar className={styles.appBar} position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        Quick List
                    </Typography>
                    <TextField
                        id="filled-basic"
                        label="Type to search"
                        /* value={} */
                        variant="filled"
                        font-color="inherit"
                        /* onChange={this.handleChange} */
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
}
