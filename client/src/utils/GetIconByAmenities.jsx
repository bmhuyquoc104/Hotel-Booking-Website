import {
  MdPool,
  MdFreeBreakfast,
  MdBalcony,
  MdKitchen,
  MdKingBed,
  MdSingleBed,
  MdCable,
} from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { FaShower, FaBath } from "react-icons/fa";
import { TextSpan } from "@/components/Text/Text";

const getIcon = (amenity) => {
  amenity = amenity.toUpperCase();
  if (amenity === "TV") {
    return <SlScreenDesktop />;
  }

  if (amenity === "BREAKFAST") return <MdFreeBreakfast />;

  if (amenity === "BALCONY") return <MdBalcony />;

  if (amenity === "SHOWER") return <FaShower />;

  if (amenity === "BATH") return <FaBath />;

  if (amenity === "KITCHEN") return <MdKitchen />;

  if (amenity === "SWIMMING POOL") return <MdPool />;

  if (amenity === "KING SIZE BED") return <MdKingBed />;

  if (amenity === "CABLE") return <MdCable />;

  if (amenity === "QUEEN SIZE BED") return <MdSingleBed />;
};

export { getIcon };
