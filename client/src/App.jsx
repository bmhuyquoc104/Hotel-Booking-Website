import { Routes, Route } from "react-router-dom";
import GlobalStyled from "@/styles/GlobalStyled";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
