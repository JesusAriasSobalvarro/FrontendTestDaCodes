import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import MatchInfo from './MatchInfo';

import { useSelector, useDispatch } from 'react-redux'
import { fetchGameInfo } from "./../actions/index"
import _ from "underscore"
import moment from "moment"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  divisionContainer: {
    paddingLeft: 10,
    display: 'flex',
    flexGrow: 1,
    backgroundColor: "#A9A9A9"
  },
  divisionTextColor: {
    color: "white"
  }
});

export default function MatchesTab() {
  const stateGames = useSelector(state => state.gameInfo.allGames)
  const dispatch = useDispatch()
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    dispatch(fetchGameInfo());
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const monthName = item => moment(item.datetime).format('MMM')

  const renderMatchInfoItems = (matches) => {
    var items = [];
    var groupedMatches = _.chain(matches).groupBy(monthName).map((value, key) => {
      return {
        month: key,
        data: value
      }
    }).value();

    groupedMatches.forEach(match => {
      var matchesComponents = []
      
      match.data.forEach(data => {
        var { local, opponent, opponent_image, datetime, home_score, away_score } = data
        matchesComponents.push(
        <MatchInfo
          key={local+opponent}
          local={local}
          opponent={opponent}
          opponent_image={opponent_image}
          datetime={datetime}
          home_score={home_score}
          away_score={away_score}
        />);
      })
      items.push(<>
        <div key={match.month} className={classes.divisionContainer}>
          <span key={`${match.month}-span`} className={classes.divisionTextColor}>{match.month}</span>
        </div>
        {matchesComponents}
      </>)
    });

    return items;
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.root}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="COPA MX" {...a11yProps(0)} />
          <Tab label="ASCENSO MX" {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {renderMatchInfoItems(_.where(stateGames, { league: "Copa MX" }))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {renderMatchInfoItems(_.where(stateGames, { league: "Ascenso MX" }))}
      </TabPanel>
    </div>
  );
}