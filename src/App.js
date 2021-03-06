import React from "react";
import Cards from "./Components/Card";
import FilterPanel from "./Components/FilterPanel";
import "./utils/App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h2 id="launchfont">SpaceX Launch Programs</h2>
      </div>
      <div className="app__content">
        <div className="app__body">
          <div className="app__filter">
            <FilterPanel />
          </div>
          <div className="app__cards">
            <Cards />
          </div>
        </div>
        <div className="app__footer">
          <h2>Assessment</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
