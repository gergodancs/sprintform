import { useContext } from "react";
import StoreCtx from "../store-context/store";
import { useTranslation } from "react-i18next";
import "./styles/listItemFilter.scss";

const SelectCategory = () => {
  const { t } = useTranslation();

  const { responseData, setSelectedCategory, showList } = useContext(StoreCtx);

  const onSelectHandler = (e) => {
    if (e.target.value === "All") {
      return setSelectedCategory([...responseData]);
    }
    setSelectedCategory(
      responseData.filter((item) => item.category === e.target.value)
    );
  };

  return (
    <div className="category-select">
      <label>{t("category-select")}</label>
      <select
        disabled={!showList}
        onChange={(e) => onSelectHandler(e)}
        className="category-select"
      >
        <option value={"All"}>{t("all")}</option>
        {responseData &&
          [...new Set(responseData?.map((item) => item.category))].map(
            (item, i) => (
              <option key={i} value={item}>
                {t(item)}
              </option>
            )
          )}
      </select>
    </div>
  );
};

export default SelectCategory;
