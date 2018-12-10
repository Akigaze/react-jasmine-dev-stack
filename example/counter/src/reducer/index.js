import * as ActionType from "../action/actionType";

const initState = {
    sum:0,
    counters:[0, 0, 0]
}

const counterReducer = (state = initState, action) => {
    let {sum,counters} = state
    switch(action.type){
        case ActionType.INCREASEMENT: {
            counters[action.index]++;
            sum++;
            return {sum, counters}
        }
        case ActionType.DECREASEMENT: {
            counters[action.index]--;
            sum--;
            return {sum, counters}
        }
        default: return state
    }
}

export default counterReducer;
