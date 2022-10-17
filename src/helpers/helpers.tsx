import { FaPizzaSlice, FaBus, FaTshirt, FaBuilding } from "react-icons/fa";

export const getIcons = (category) => {
  if (category === "food") {
    return <FaPizzaSlice size={40} />;
  }
  if (category === "travel") {
    return <FaBus size={40} />;
  }
  if (category === "clothing") {
    return <FaTshirt size={40} />;
  }
  if (category === "housing") {
    return <FaBuilding size={40} />;
  }
};
