import { Routes, Route } from "react-router-dom";
import GlobalStyled from "@/styles/GlobalStyled";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
