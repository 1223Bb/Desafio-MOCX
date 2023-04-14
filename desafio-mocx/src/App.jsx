import "./App.css";
import List from "./List.jsx";
import Form from "./Form.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
