import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contributions from "./pages/OpenSourceExperience";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates" element={<Certificate />} />
      <Route
        path="/contributions"
        element={<Contributions />}
      />
    </Routes>
  );
}

export default App;