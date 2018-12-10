import reducer from "../../src/reducer/index";
import {allEqualTo} from "../util/assert";

expect.extend({allEqualTo});

describe("counter reducer test", () => {
    let initState;
    beforeEach(() => {
        initState = {
            sum:0,
            counters:[0, 0, 0]
        }
    });

    it("should return the default state when action not match", () => {
        const state = reducer(undefined, {})

        expect(state).toEqual({sum:0, counters:jasmine.any(Array)});
        expect(state.counters).allEqualTo(0);
    });

    it("should plus one at the specific couter of state when give a INCREASEMENT action", () => {
        const state = reducer(initState, {type:"INCREASEMENT", index:1})

        expect(state.sum).toEqual(1);
        expect(state.counters).toEqual([0, 1, 0])
    });

    it("should reduce one at the specific couter of state when give a DECREASEMENT action", () => {
        const state = reducer(initState, {type:"DECREASEMENT", index:0})

        expect(state.sum).toEqual(-1);
        expect(state.counters).toEqual([-1, 0, 0])
    });

    it("should sum be the sum of all the counters of state", () => {
        let state = reducer(initState, {type:"INCREASEMENT", index:1})
        state = reducer(state, {type:"INCREASEMENT", index:2})
        state = reducer(state, {type:"INCREASEMENT", index:0})
        state = reducer(state, {type:"DECREASEMENT", index:2})

        expect(state.sum).toEqual(2);
        expect(state.counters).toEqual([1, 1, 0])
    });
});
