import "./App.css";
import List from "./List.jsx";
import UpdateEntry from "./UpdateEntry.jsx";
// import Form from "./Form.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route path="/:id" element={<UpdateEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
