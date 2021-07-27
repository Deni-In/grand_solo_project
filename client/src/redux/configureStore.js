import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, categories, schools }),

  applyMiddleware(thunk, logger)
);
