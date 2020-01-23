import React from 'react';
import './../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Drawer, MenuList, MenuItem } from '@material-ui/core';
import Games from './../components/Games';
import Players from './../components/Players';
import Statistics from './../components/Statistics';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  sideBarImage: {
    width: '100%',
    height: '100%',
    objectFit: "cover"
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
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
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
