import React from "react";
import "./App.css";
import Products from "./components/products";
import Departments from "./components/departments";

function App() {
  return (
    <div className="App">
      <Products uri="http://localhost:3001/products"/>
      <Departments uri="http://localhost:3001/departments"/>
    </div>
  );
}

export default App;
