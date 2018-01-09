import { tickEpic } from "./tick.epic";
import { serverEpic } from "./server.epic";
import { combineEpics, Epic } from "redux-observable";
import { Action } from "redux";

export const rootEpic = combineEpics(tickEpic, serverEpic);
