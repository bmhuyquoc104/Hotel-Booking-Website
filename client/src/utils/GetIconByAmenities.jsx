import {
  MdPool,
  MdFreeBreakfast,
  MdBalcony,
  MdKitchen,
  MdKingBed,
  MdSingleBed,
  MdCable,
  MdOutdoorGrill,
  MdLanguage,
  MdMiscellaneousServices,
  MdFreeCancellation,
  MdFamilyRestroom,
  MdPets,
} from "react-icons/md";
import { BiWifi, BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import {
  FaShower,
  FaTree,
  FaBath,
  FaParking,
  FaSmoking,
  FaBan,
} from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";
const getIcon = (amenity) => {
  amenity = amenity.toUpperCase();
  if (amenity === "TV") {
    return <SlScreenDesktop />;
  }

  if (amenity === "BREAKFAST") return <MdFreeBreakfast />;

  if (amenity === "BALCONY") return <MdBalcony />;

  if (amenity === "SHOWER") return <FaShower />;

  if (amenity === "BATH" || amenity === "BATHROOM") return <FaBath />;

  if (amenity === "KITCHEN") return <MdKitchen />;

  if (amenity === "SWIMMING POOL") return <MdPool />;

  if (amenity === "KING SIZE BED" || amenity === "BEDS") return <MdKingBed />;
  if (amenity === "QUEEN SIZE BED") return <MdSingleBed />;

  if (amenity === "CABLE") return <MdCable />;

  if (amenity === "LANGUAGES SPOKEN") return <MdLanguage />;
  if (amenity === "PARKING") return <FaParking />;
  if (amenity === "MISCELLANEOUS") return <MdMiscellaneousServices />;
  if (amenity === "MEDIA & TECHNOLOGY") return <SlScreenDesktop />;
  if (amenity === "INTERNET") return <BiWifi />;
  if (amenity === "OUTDOORS") return <MdOutdoorGrill />;
  if (amenity === "OUTDOOR & VIEW") return <FaTree />;
  if (amenity === "PETS") return <MdPets />;
  if (amenity === "PARTIES") return <GiPartyPopper />;
  if (amenity === "SMOKING") return <FaSmoking />;
  if (amenity === "CHILDREN") return <MdFamilyRestroom />;
  if (amenity === "NO AGE RESTRICTION") return <FaBan />;
  if (amenity === "CASH ONLY") return <BsCashCoin />;
  if (amenity === "CHECK-IN") return <BiLogInCircle />;
  if (amenity === "CHECK-OUT") return <BiLogOutCircle />;
  if (amenity === "CANCELLATION/PREPAYMENT") return <MdFreeCancellation />;
};

export { getIcon };
