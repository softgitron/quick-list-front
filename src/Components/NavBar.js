import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

  

  class ButtonAppBar extends React.Component {
  

  constructor() {
    const classes = myStyles();
    super();
    this.state = {
      searchValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange = (e) => this.setState({
		searchValue: e.target.value
	})

  render() {
    return (
      <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={this.classes.title}>
              News
            </Typography>
            <TextField id="filled-basic" 
            label="Type to search"
            value={this.state.searchValue} 
            variant="filled" 
            font-color="inherit"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }} 
            />
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } 
}


export default ButtonAppBar