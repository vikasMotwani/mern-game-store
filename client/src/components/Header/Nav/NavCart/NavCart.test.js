import React from "react";
import { shallow } from "enzyme";
import NavCart from "./NavCart";

describe("NavCart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NavCart />);
    expect(wrapper).toMatchSnapshot();
  });
});
