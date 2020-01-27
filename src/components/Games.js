import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import venadosLogo from './../assets/venados-logo.png';
import TabsMatches from './MatchesTabs';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  topImageContainer: {
    marginTop: 25,
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'center'
  },
  topImage: {
    width: 175
  }
});

function Games() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.topImageContainer}>
        <img src={venadosLogo} className={classes.topImage} alt={'venadosLogo'} />
      </div>
      <TabsMatches />
    </>
  );
}

export default Games;
