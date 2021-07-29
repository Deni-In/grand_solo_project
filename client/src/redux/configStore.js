import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import categories from "./features/categories";
import schools from "./features/schools";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ categories: categories, schools: schools }),
  applyMiddleware(thunk, logger)
);
