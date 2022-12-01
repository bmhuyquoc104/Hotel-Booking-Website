import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getHotelInfo, postHotelInfo } from "@/api/api";

const useGetHotelInfo = () =>
  useQuery({
    queryKey: ["hotel-info"],
    queryFn: () => getHotelInfo(),
  });

  const useAddOrder = () =>
  useMutation({
    mutationFn: (order) => postHotelInfo(order),
    onError: (error) => {
      console.log(`Error${error}`)
    },
    onSuccess: (data) => {
      console.log(data)
    },
  })

export { useGetHotelInfo, useAddOrder };
