import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/shared/NavBar";
import HomePage from "./components/pages/HomePage/HomePage";
import ServersPage from "./components/pages/ServersPage/ServersPage";
import ServerSettingsPage from "./components/pages/ServerSettingsPage/ServerSettingsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servers" element={<ServersPage />} />
        <Route path="/servers/settings" element={<ServerSettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
