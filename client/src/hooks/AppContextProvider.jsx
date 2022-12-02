import React, { createContext, useContext, useState } from "react";

export const ReservationContext = createContext({});

function AppContextProvider({ children }) {
  const [reservation, setReservation] = useState();
  const addReservation = (data) => {
    setReservation(data);
  };

  const emptyList = () => {
    setReservation([]);
  };

  return (
    <ReservationContext.Provider
      value={{
        addReservation,
        emptyList,
        reservation,
        setReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
export const useReservationContext = () => useContext(ReservationContext);

export default AppContextProvider;
