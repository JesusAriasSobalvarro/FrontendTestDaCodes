import { Get } from './../services/httpService';

export const FETCH_GAMES_INFO_REQUEST = "FETCH_GAMES_INFO_REQUEST";
export const FETCH_GAMES_INFO_SUCCESS = "FETCH_GAMES_INFO_SUCCESS";
export const FETCH_GAMES_INFO_FAILURE = "FETCH_GAMES_INFO_FAILURE";

export function fectchGamesInfoRequest() {
    return {
        type: FETCH_GAMES_INFO_REQUEST,
    }
}

export function fectchGamesInfoSuccess(payload) {
    return {
        type: FETCH_GAMES_INFO_SUCCESS,
        payload
    }
}

export function fectchGamesInfoFailure(payload) {
    return {
        type: FETCH_GAMES_INFO_FAILURE,
        payload
    }
}

export const fetchGameInfo = () => {
    return async function (dispatch) {
        dispatch(fectchGamesInfoRequest());
        try {
            const response = await Get("https://venados.dacodes.mx/api/games")
            dispatch(fectchGamesInfoSuccess(response))
        } catch (error) {
            dispatch(fectchGamesInfoFailure(error))
        }
    }
}