import React from "react";
import Toolbar from './components/Toolbar'
import Portfolio from "./components/Portfolio";

const portfolio = new Portfolio();
const filters = [...portfolio.filters];
const selected = portfolio.selected;
const projects = portfolio.projects;

const App = () => {
  const func = (filter) => {
    const arr = [...projects]; // .filter((item) => item.category === filter);
    console.log(filter);
    if (filter === 'All') {
      return arr;
    }
    return arr.filter((item) => item.category === filter);
  };

  return (
    <>
      <Toolbar 
        filters={filters} 
        selected={selected} 
        onSelectFilter={func}
      />
    </>
  );
};

export default App;
