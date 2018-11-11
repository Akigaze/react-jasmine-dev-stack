import React from "react";
import {mount, shallow} from "enzyme";

import FeatureList from "../../src/component/feature-list";

describe("Feature List", () => {
    let wrapper = {};

    beforeEach(() => {
        wrapper = shallow(<FeatureList />)
    });

    it("should Feature List includes a <ul>", () => {
        expect(wrapper.find("ul")).toExist();
        expect(wrapper.find("ul")).toHaveClassName("list!");
    });
});
