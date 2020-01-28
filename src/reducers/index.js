import { combineReducers } from "redux";
import { gamesReducer } from "./games";
import { playersReducer } from "./players"


export const rootReducer = combineReducers({
    gameInfo: gamesReducer,
    playerInfo: playersReducer
})