import { server } from "../../feathers";
import { ColorActions } from "../actions/color";
import { colorSaved } from "../actions/color";
import { Epic } from "redux-observable";
import { ofType } from "redux-observable";
import { switchMap, mapTo } from "rxjs/operators";
import { Action } from "redux";
import { fromPromise } from "rxjs/Observable/fromPromise";

export const serverEpic: Epic<Action, {}> = action$ =>
  action$.pipe(
    ofType(ColorActions.changeColor),
    switchMap(action =>
      fromPromise(
        server
          .service("message")
          .create({ text: "hello", action: action.payload })
      ).pipe(mapTo(colorSaved()))
    )
  );
