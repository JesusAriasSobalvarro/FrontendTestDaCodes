import React from 'react';
import './../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, MenuList, MenuItem } from '@material-ui/core';
import Games from './../components/Games';
import Players from './../components/Players';
import Statistics from './../components/Statistics';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  sideBarImage: {
    width: '100%',
    height: '100%',
    objectFit: "cover"
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: "white"
  }
});

function MainContainer() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    drawerOpen: false
  })

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, drawerOpen: open });
  };

  const navbar = (
    <div
      className={classes.list}
    >
      <div className={"sideBarBackground"}>
        <span>Test Name</span>
      </div>
      <MenuList>
        <MenuItem component={Link} to="/">
          Games
      </MenuItem>
        <MenuItem component={Link} to="/players">
          Players
      </MenuItem>
        <MenuItem component={Link} to="/statistics">
          Statistics
      </MenuItem>
      </MenuList>
    </div>
  );


  return (
    <Router>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={state.drawerOpen} onClose={toggleDrawer(false)}>
        {navbar}
      </Drawer>

      <Switch>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/">
          <Games />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainContainer;
