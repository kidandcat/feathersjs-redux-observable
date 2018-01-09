import { server } from "../../feathers";
import { ColorActions } from "../actions/color";
import { colorSaved } from "../actions/color";
import { Epic } from "redux-observable";
import { ofType } from "redux-observable";
import { switchMap, mapTo } from "rxjs/operators";
import { Action } from "redux";
import { ajax } from "rxjs/Observable/dom/ajax";
import { fromPromise } from "rxjs/Observable/fromPromise";

export const serverEpic: Epic<Action, {}> = action$ =>
  action$.pipe(
    ofType(ColorActions.changeColor),
    switchMap((action: Action) =>
      fromPromise(server.service("message").create({ text: "hello" })).pipe(
        mapTo(colorSaved())
      )
    )
  );
