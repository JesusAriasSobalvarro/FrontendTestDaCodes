import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './../App.css'


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    cursor: "pointer"
  },
  playerPic: {
    width: 140,
    height: 140,
    borderRadius: 100,
    objectFit: "cover",
    border: "2px solid #00762B",
    marginBottom: 10
  },
});

function PlayerInfo({ playerId, name, first_surname, position, image, openModal }) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() => openModal(playerId)}>
      <img className={classes.playerPic} src={image} alt={name + " " + first_surname + " Pic"}/>
      <span>{position}</span>
      <span>{name}</span>
      <span>{first_surname}</span>
    </div>
  );
}

export default PlayerInfo;