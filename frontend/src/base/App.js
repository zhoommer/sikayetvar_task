import Login from "../authentication/login/Login";
import Dashboard from "./Dashboard";
import "./app.css";
import { Routes, Route } from "react-router-dom";
function App() {
  const currPath = window.location.pathname.split("/");

  return (
    <div>
      {currPath[1] === "" ? (
        <Login />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
