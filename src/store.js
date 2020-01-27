import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "./middleware"
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

export const rootState = {
    gameInfo : {
        allGames : [],
        errorMessage: ""
    }
}   

export function configureStore() {
  let middleware = applyMiddleware(logger, thunk);
  
  middleware = composeWithDevTools(middleware);

  const store = createStore(
    rootReducer,
    rootState,
    middleware);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
