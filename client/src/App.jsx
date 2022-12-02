import { Routes, Route } from "react-router-dom";
import GlobalStyled from "@/styles/GlobalStyled";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import RoomPriceEdit from "@/pages/RoomPriceEdit";

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editRoomPrice" element={<RoomPriceEdit />} />
      </Routes>
    </>
  );
}

export default App;
