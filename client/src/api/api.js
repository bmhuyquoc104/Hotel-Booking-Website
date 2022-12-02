import axios from "axios";

const api = axios.create({
  baseURL: "https://api.npoint.io/4b04b9f2f6d449eccc1e",
});

const roomPriceApi = axios.create({
  baseURL: "https://api.npoint.io/7e03c46a08e834cb4bf8"
})

const getHotelInfo = () => api.get("/").then((res) => res.data);

const postHotelInfo = (hotel) => api.post("/", hotel).then((res) => res.data);

const getRoomPriceInfo = () => roomPriceApi.get("/").then((res) => res.data);

const postRoomPriceInfo = (room) => roomPriceApi.post("/",room).then((res) => res.data);
export { getHotelInfo, postHotelInfo,getRoomPriceInfo,postRoomPriceInfo };
