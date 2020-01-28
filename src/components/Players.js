import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './../App.css';
import PlayerInfo from "./PlayerInfo";
import JsonMock from "./../PlayersMock";
import _ from "underscore";
import Modal from '@material-ui/core/Modal';
import moment from "moment"
import classnames from "classnames"
import { fetchPlayersInfo } from "./../actions"
import { useDispatch, useSelector} from 'react-redux';
const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  paper: {
    position: 'absolute',
    //width: 400,
    outline: 0,
    backgroundColor: "white",
    //width: "50%",
    //padding: 20,
    display: "flex",
    flexDirection: "column"
    //border: '2px so',
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
  },
  modalPlayerPicContainer: {
    backgroundColor: "#30502B",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20
  },
  modalPlayerInformation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20
  },
  whiteText: {
    color: "white"
  },
  playerModalPic: {
    width: 140,
    height: 140,
    objectFit: "cover",
    border: "2px solid #00762B",
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 100
  },
  modalTitleInfo: {
    marginTop: 10,
    textAlign: "center"
  },
  modalBodyInfo: {
    textAlign: "center",
    fontSize: 12,
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Players() {
  //const team = useSelector(state => state.playerInfo.allPlayers)
  const team = JsonMock.data.team;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [selectedPlayer, setSelectedPlayer] = React.useState({
    name: "",
    first_surname: "",
    second_surname: "",
    birthday: "",
    birth_place: "",
    weight: 0,
    height: 0,
    position: "",
    number: 0,
    position_short: "",
    last_team: "",
    image: ""
  });

useEffect(() => {
    dispatch(fetchPlayersInfo());
  }, [dispatch]);


  const openPlayerInfo = (id) => {
    setOpen(true)
    setSelectedPlayer(playerInfo[id])
  }

  
  var playerInfoComponents = []
  var playerInfo = []
  _.each(team, items => {
    _.each(items, player => {
      playerInfoComponents.push(
        <PlayerInfo
          key={playerInfoComponents.length}
          playerId={playerInfoComponents.length}
          position={player.position}
          name={player.name}
          first_surname={player.first_surname}
          image={player.image}
          openModal={openPlayerInfo} />)

      playerInfo.push(player)

    });
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      {playerInfoComponents}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classnames(classes.paper, 'playerModal')}>
          <div className={classes.modalPlayerPicContainer}>
            <span className={classes.whiteText}>FICHA TÉCNICA</span>
            <img src={selectedPlayer.image} className={classes.playerModalPic} />
<span className={classnames(classes.whiteText, classes.modalBodyInfo)}>{selectedPlayer.name} {selectedPlayer.first_surname}</span>
  <span className={classnames(classes.whiteText, classes.modalBodyInfo)}>{selectedPlayer.position}</span>
          </div>
          <div className={classes.modalPlayerInformation}>

            <span className={classes.modalTitleInfo}>FECHA DE NACIMIENTO</span>
   <span className={classes.modalBodyInfo}>{moment(selectedPlayer.birthday).format("DD/MM/YYYY")}</span>
            <span className={classes.modalTitleInfo}>LUGAR DE NACIMIENTO</span>
   <span className={classes.modalBodyInfo}>{selectedPlayer.birth_place}</span>
            <span className={classes.modalTitleInfo}>PESO</span>
   <span className={classes.modalBodyInfo}>{selectedPlayer.weight ? selectedPlayer.weight + " KG" : "N/A"}</span>
            <span className={classes.modalTitleInfo}>ALTURA</span>
   <span className={classes.modalBodyInfo}>{selectedPlayer.height ? selectedPlayer.height + " M" : "N/A"}</span>
            <span className={classes.modalTitleInfo}>EQUIPO ANTERIOR</span>
   <span className={classes.modalBodyInfo}>{selectedPlayer.last_team ? selectedPlayer.last_team : "N/A"}</span>
          </div>
          {/* <SimpleModal /> */}
        </div>
      </Modal>
    </div>
  );
}

export default Players;