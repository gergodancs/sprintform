import { useContext } from "react";
import { TrackerResponse } from "../helpers/model/model";
import StoreCtx from "../store-context/store";
import ListItem from "./ListItem";
import { useTranslation } from "react-i18next";

import "./styles/spendList.scss";
import { Chart } from "./Chart";

const SpendList = () => {
  const { t } = useTranslation();

  const { isLoading, showList, selectedCategory } =
    useContext(StoreCtx);

  if (isLoading) {
    return <p>{t("loading")}</p>;
  }
  return (
    <ul className="spend-list-container">
      {selectedCategory && !showList && <Chart />}
      {selectedCategory &&
        showList &&
        selectedCategory.map((item: TrackerResponse, i) => (
          <ListItem key={i} data={item} />
        ))}
    </ul>
  );
};

export default SpendList;
