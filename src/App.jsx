import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import AllRouting from "./components/AllRouting/AllRouting";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      setUser(jwtUser);
      console.log(jwtUser);
    } catch (error) {}
  }, []);

  return (
    <div className="app">
      <Navbar user={user} />
      <main className="main_content">
        <AllRouting />
      </main>
    </div>
  );
}

export default App;
