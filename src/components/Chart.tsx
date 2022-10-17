import { useContext } from "react";
import StoreCtx from "../store-context/store";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { transformData } from "../helpers/helpers";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const { selectedCategory } = useContext(StoreCtx);

  return <Doughnut height={30} data={transformData(selectedCategory)} />;
}
