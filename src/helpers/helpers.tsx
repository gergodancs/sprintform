import { FaPizzaSlice, FaBus, FaTshirt, FaBuilding } from "react-icons/fa";
import { TrackerResponse } from "./model/model";

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

export const transformData = (selectedCategory) => {
  const transformedData = {
    labels: [],
    datasets: [
      {
        label: "Spends",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  for (let category of selectedCategory) {
    if (!transformedData.labels.includes(category.category)) {
      transformedData.labels.push(category.category);
    }

    transformedData.datasets[0].data.push(category.sum);
  }
  return transformedData;
};

export const getAggregatedValues = (data: TrackerResponse[]) => {
  let aggregatedValues = 0;
  data.forEach((item) => (aggregatedValues += item.sum));
  return aggregatedValues;
};
export const getAggregatedValuesByCategory = (data: TrackerResponse[]) => {
  let aggregatedCategories = [
    { category: "clothing", sum: 0 },
    { category: "food", sum: 0 },
    { category: "travel", sum: 0 },
    { category: "housing", sum: 0 },
  ];
  data.forEach((item) => {
    if (item.category === "clothing") {
      aggregatedCategories[0].sum += item.sum;
    }
    if (item.category === "food") {
      aggregatedCategories[1].sum += item.sum;
    }
    if (item.category === "travel") {
      aggregatedCategories[2].sum += item.sum;
    }
    if (item.category === "housing") {
      aggregatedCategories[3].sum += item.sum;
    }
  });
  return aggregatedCategories;
};
