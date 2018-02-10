import * as React from "react";
import About from "../../src/pages/About";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("<About />", () => {
  it("has about text", () => {
    // Render a checkbox with label in the document
    const component = shallow(<About />);
    expect(component.text()).contains("About");
  });
});
