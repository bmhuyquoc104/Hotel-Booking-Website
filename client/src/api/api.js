import axios from "axios";

const api = axios.create({
  baseURL: "https://api.npoint.io/4b04b9f2f6d449eccc1e",
});

const getHotelInfo = () => api.get("/").then((res) => res.data);

export { getHotelInfo };
