import {
    FETCH_GAMES_INFO_REQUEST,
    FETCH_GAMES_INFO_SUCCESS,
    FETCH_GAMES_INFO_FAILURE
} from "./../actions/index";

export const gamesInitialState = {
    allGames: [],
    errorMessage: ""
}

export function gamesReducer(state = gamesInitialState, action) {
    switch (action.type) {
        case FETCH_GAMES_INFO_REQUEST:
            return { ...state }
        case FETCH_GAMES_INFO_SUCCESS:
            return { ...state, allGames: action.payload.data.games }
        case FETCH_GAMES_INFO_FAILURE:
            return { ...state, errorMessage: action.payload.message }
        default:
            return state;
    }
}