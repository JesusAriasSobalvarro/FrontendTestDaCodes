import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import venadosLogo from './../assets/venados-logo.png';
import moment from "moment"
import './../App.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
    background: '#77AE4B',
    justifyContent: 'center'
  },
  oppositeTeam: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    alignSelf: 'center'
  },
  teamImage: {
    width: 50
  },
  score: {
    alignSelf: 'center',
    fontSize: '2.5em',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    flex: 2,
  },
  date: {
    color: 'white'
  }
});

function MatchInfo(props) {
  const classes = useStyles();
  const { local, opponent, opponent_image, datetime, home_score, away_score} = props;
  return (
    <div className={classes.root}>
      <div className={classes.itemContainer}>
        <CalendarTodayIcon className={classes.date}></CalendarTodayIcon>
        <span className={classes.date}>{moment(datetime).format('DD')}</span>
        <span className={classes.date}>{moment(datetime).format('ddd')}</span>
      </div>
      <div className={classes.oppositeTeam}>
        <img src={local ? venadosLogo : opponent_image} className={'teamLogoThumbnail'} alt={`homeTeamLogo`}/>
        <span className='teamName'>{local ? "Venados F.C." : opponent}</span>
      </div>
      <span className='scoreText'>{home_score} - {away_score}</span>
      <div className={classes.oppositeTeam}>
        <img src={local ? opponent_image : venadosLogo} className='teamLogoThumbnail' alt={'awayTeamLogo'}/>
        <span className='teamName'>{local ? opponent : "Venados F.C."}</span>
      </div>
    </div>
  );
}

export default MatchInfo;