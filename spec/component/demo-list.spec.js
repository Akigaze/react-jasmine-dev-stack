import React from "react";
import {mount, shallow} from "enzyme";

import DemoList from "../../src/component/demo-list";

describe("Feature List", () => {
    let wrapper = {};

    beforeEach(() => {
        wrapper = mount(<DemoList />)
    });

    it("should Feature List includes a <ul>", () => {
        expect(wrapper.find("ul")).toExist();
        expect(wrapper.find("ul")).toHaveClassName("list");
    });
});
