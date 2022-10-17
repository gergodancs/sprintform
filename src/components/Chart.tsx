import { useContext } from "react";
import StoreCtx from "../store-context/store";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const { selectedCategory } = useContext(StoreCtx);
  const transformData = (selectedCategory) => {
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
  return <Doughnut height={30} data={transformData(selectedCategory)} />;
}
