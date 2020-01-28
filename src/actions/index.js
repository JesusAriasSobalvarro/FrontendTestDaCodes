import { Get } from './../services/httpService';

export const FETCH_GAMES_INFO_REQUEST = "FETCH_GAMES_INFO_REQUEST";
export const FETCH_GAMES_INFO_SUCCESS = "FETCH_GAMES_INFO_SUCCESS";
export const FETCH_GAMES_INFO_FAILURE = "FETCH_GAMES_INFO_FAILURE";
export const FETCH_PLAYERS_INFO_REQUEST = "FETCH_PLAYERS_INFO_REQUEST";
export const FETCH_PLAYERS_INFO_SUCCESS = "FETCH_PLAYERS_INFO_SUCCESS";
export const FETCH_PLAYERS_INFO_FAILURE = "FETCH_PLAYERS_INFO_FAILURE";



export function fetchGamesInfoRequest() {
    return {
        type: FETCH_GAMES_INFO_REQUEST,
    }
}

export function fetchGamesInfoSuccess(payload) {
    return {
        type: FETCH_GAMES_INFO_SUCCESS,
        payload
    }
}

export function fetchGamesInfoFailure(payload) {
    return {
        type: FETCH_GAMES_INFO_FAILURE,
        payload
    }
}


export function fetchPlayersInfoRequest() {
    return {
        type: FETCH_PLAYERS_INFO_REQUEST,
    }
}

export function fetchPlayersInfoSuccess(payload) {
    return {
        type: FETCH_PLAYERS_INFO_SUCCESS,
        payload
    }
}

export function fetchPlayersInfoFailure(payload) {
    return {
        type: FETCH_PLAYERS_INFO_FAILURE,
        payload
    }
}






export const fetchGameInfo = () => {
    return async function (dispatch) {
        dispatch(fetchGamesInfoRequest());
        try {
            const response = await Get("https://venados.dacodes.mx/api/games")
            dispatch(fetchGamesInfoSuccess(response))
        } catch (error) {
            dispatch(fetchGamesInfoFailure(error))
        }
    }
}

export const fetchPlayersInfo = () => {
    return async function (dispatch) {
        dispatch(fetchPlayersInfoRequest());
        try {
            const response = await Get("https://venados.dacodes.mx/api/players")
            dispatch(fetchPlayersInfoSuccess(response))
        } catch (error) {
            dispatch(fetchPlayersInfoFailure(error))
        }
    }
}