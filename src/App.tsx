import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Routes as GistViewerRoutes } from "utils/Routes";

import { Main, GistDetails } from "pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={GistViewerRoutes.main} element={<Main />} />
        <Route path="/:id" element={<GistDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
