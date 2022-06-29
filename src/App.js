import Welcome from "./welcomepage";
import Aboutme from "./aboutme/aboutme";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
