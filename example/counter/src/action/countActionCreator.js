import * as ActionType from "./actionType";

export const increaseAction = (index) => {return {type: ActionType.INCREASEMENT, index}}

export const decreaseAction = (index) => {return {type: ActionType.DECREASEMENT, index}}
