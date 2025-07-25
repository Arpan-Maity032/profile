import Layouts from "./components/Layouts.jsx"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Education from "./components/Education/Education.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </Router>
  );
}

export default App;
