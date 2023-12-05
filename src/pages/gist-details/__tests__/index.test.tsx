import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GistDetails } from "../index";

test("Renders the gist details page", () => {
  render(
    <Router>
      <GistDetails />
    </Router>
  );
  expect(true).toBeTruthy();
});
