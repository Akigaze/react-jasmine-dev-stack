import {increaseAction, decreaseAction} from "../../src/action/countActionCreator";

describe("counter action test", () => {
    it("create a increase action", () => {
        const action = increaseAction(1);

        expect(action).toEqual({type: "INCREASEMENT", index:1})
    });

    it("create a decrease action", () => {
        const action = decreaseAction(1);

        expect(action).toEqual({type: "DECREASEMENT", index:1})
    });
});
