import { useState } from "react";
import AllRouting from "./AllRouting/AllRouting";
import Navbar from "./Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main_content">
        <AllRouting />
      </main>
    </div>
  );
}

export default App;
