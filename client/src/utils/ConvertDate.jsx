
import { format } from "date-fns";

const convertTimestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return format(date, "EEE, d MMM yyyy")
}

export {convertTimestampToDate}