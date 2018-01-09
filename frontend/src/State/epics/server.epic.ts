import { serviceMessages } from "../../feathers";
import { ColorActions } from "../actions/color";
import { Epic } from "redux-observable";
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { Action } from "redux";

export const serverEpic: Epic<Action, {}> = action$ =>
  action$.pipe(
    ofType(ColorActions.changeColor),
    mergeMap((action: Action) => {
      console.log("calling service");
      return serviceMessages.create({
        text: "A new color",
        color: action.payload
      });
    })
  );
