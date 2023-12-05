import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "../index";

test("Renders the gist lists page", () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  expect(true).toBeTruthy();
});
