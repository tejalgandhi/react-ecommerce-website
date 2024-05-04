import { useState } from "react";
import AllRouting from "./components/AllRouting/AllRouting";
import Navbar from "./components/Navbar/Navbar";
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
