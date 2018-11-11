import React from "react";
import {shallow} from "enzyme";

import App from "../../src/app";
import DemoList from "../../src/component/demo-list";


describe("App", () => {
    it("should include <DemoList>", function() {
        const wrapper = shallow(<App />);
        const demo = <DemoList />
        expect(wrapper.contains(demo)).toEqual(true);
    });
});
