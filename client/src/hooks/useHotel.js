import { useQuery } from '@tanstack/react-query'
import { getHotelInfo } from "@/api/api";

const useGetHotelInfo = () =>
  useQuery({
    queryKey: ["hotel-info"],
    queryFn: () => getHotelInfo(),
  });

export { useGetHotelInfo };
