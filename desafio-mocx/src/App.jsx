import "./App.css";
import Home from "./Home";
import List from "./List.jsx";
import UpdateEntry from "./UpdateEntry.jsx";

import { useState } from "react";

// import Form from "./Form.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [pessoas, setPessoas] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home pessoas={pessoas} setPessoas={setPessoas} />}
        />
        <Route
          exact
          path="/lista"
          element={<List pessoas={pessoas} setPessoas={setPessoas} />}
        >
          <Route
            path=":id"
            element={<UpdateEntry pessoas={pessoas} setPessoas={setPessoas} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
