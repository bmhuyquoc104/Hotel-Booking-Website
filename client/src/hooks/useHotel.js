import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getHotelInfo, postHotelInfo, getRoomPriceInfo, postRoomPriceInfo } from "@/api/api";

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

  const usePostHotelInfo = () =>
  useMutation({
    mutationFn: (order) => postHotelInfo(order),
    onError: (error) => {
      console.log(`Error${error}`)
    },
    onSuccess: (data) => {
      console.log(data)
    },
  })

  const usePostRoomPriceInfo = () =>
  useMutation({
    mutationFn: (order) => postRoomPriceInfo(order),
    onError: (error) => {
      console.log(`Error${error}`)
    },
    onSuccess: (data) => {
      console.log(data)
    },
  })
export { useGetHotelInfo, usePostHotelInfo,useGetRoomPriceInfo,usePostRoomPriceInfo };
