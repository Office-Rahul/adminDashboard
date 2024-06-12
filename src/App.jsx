import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "./componets/Login";
import Signup from "./componets/Signup";

import "./App.css";
import PanelSection from "./componets/PanelSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PanelSection />} />
        <Route path="/distributor" element={<PanelSection />} />
        <Route path="/user" element={<PanelSection />} />
        <Route path="/amountrate" element={<PanelSection />} />
        <Route path="/livegame" element={<PanelSection />} />
        <Route path="/ntpreport" element={<PanelSection />} />
        <Route path="/result" element={<PanelSection />} />
        <Route path="/sales" element={<PanelSection />} />
        <Route path="/commision" element={<PanelSection />} />
        <Route path="/changepassword" element={<PanelSection />} />
        <Route path="/resultsettings" element={<PanelSection />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
