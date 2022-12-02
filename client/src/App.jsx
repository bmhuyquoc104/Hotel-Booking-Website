import { Routes, Route } from "react-router-dom";
import GlobalStyled from "@/styles/GlobalStyled";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import Reservation from "@/pages/Reservation";
import RoomPriceEdit from "@/pages/RoomPriceEdit";
import AppContextProvider from "@/hooks/AppContextProvider";
import ReservationDetail from "@/pages/ReservationDetail";
import NotFound from "@/pages/Notfound";

function App() {
  return (
    <>
      <AppContextProvider>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/reservation-detail" element={<ReservationDetail />} />
          <Route path="/editRoomPrice" element={<RoomPriceEdit />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </AppContextProvider>
    </>
  );
}

export default App;
