import React from "react";
import "./App.css";
import { Router, Route } from "react-router";
import history from "./history";
import SponsorPage from "./components/SponsorPage";
import { NavBar } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Router history={history}>
          <Route exact path="/" component={SponsorPage} />
          <Route path="/homePage" component={undefined} />
          <Route path="/sponsorPage" component={SponsorPage} />
        </Router>
      </header>
      <body>
        <NavBar />
      </body>
    </div>
  );
};

export default App;
