import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Router";

function App() {
  return (
    <Router basename={"/hr-pannel"}>
      <AppRoutes />
    </Router>
  );
}

export default App;
