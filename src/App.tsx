import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "screens/LayoutScreen";

const App = () => {
  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
};

export default App;
