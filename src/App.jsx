import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contributions from "./pages/Contributions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/contributions"
        element={<Contributions />}
      />
    </Routes>
  );
}

export default App;