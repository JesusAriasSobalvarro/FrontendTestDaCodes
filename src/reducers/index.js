import { combineReducers } from "redux";
import { gamesReducer } from "./games";


export const rootReducer = combineReducers({
    gameInfo: gamesReducer 
})