import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("App test", () => {
  it("test app basic", () => {
    const app = renderer.create(<App />);

    expect(app.toJSON()).toMatchSnapshot();
  });
});
