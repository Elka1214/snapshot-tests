import { render, screen } from "@testing-library/react";
import App from "./App";
import { Renderer } from "react-dom";

test("renders a snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
