import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getHotelInfo,
  postHotelInfo,
  getRoomPriceInfo,
  postRoomPriceInfo,
} from "@/api/api";

const useGetHotelInfo = () =>
  useQuery({
    queryKey: ["hotel-info"],
    queryFn: () => getHotelInfo(),
  });

const useGetRoomPriceInfo = () =>
  useQuery({
    queryKey: ["roomPrice-info"],
    queryFn: () => getRoomPriceInfo(),
  });
const usePostHotelInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (order) => postHotelInfo(order),
    onError: (error) => {
      console.log(`Error${error}`);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      console.log(data);
    },
  });
};

const usePostRoomPriceInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (order) => postRoomPriceInfo(order),
    onError: (error) => {
      console.log(`Error${error}`);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      console.log(data);
    },
  });
};

export {
  useGetHotelInfo,
  usePostHotelInfo,
  useGetRoomPriceInfo,
  usePostRoomPriceInfo,
};
