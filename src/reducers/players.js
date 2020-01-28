import {
    FETCH_PLAYERS_INFO_REQUEST,
    FETCH_PLAYERS_INFO_SUCCESS,
    FETCH_PLAYERS_INFO_FAILURE
} from "./../actions/index";

export const playersInitialState = {
    allPlayers: [],
    errorMessage: ""
}

export function playersReducer(state = playersInitialState, action) {
    switch (action.type) {
        case FETCH_PLAYERS_INFO_REQUEST:
            return { ...state }
        case FETCH_PLAYERS_INFO_SUCCESS:
            return { ...state, allPlayers: action.payload.data.team }
        case FETCH_PLAYERS_INFO_FAILURE:
            return { ...state, errorMessage: action.payload.message }
        default:
            return state;
    }
}