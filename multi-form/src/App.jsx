import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Result from "./Result";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<FirstStep />} />
          <Route path="/step2" element={<SecondStep />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;