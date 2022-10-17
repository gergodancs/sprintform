import "./styles/listItemFilter.scss";
import { useContext } from "react";
import SelectCategory from "./SelectCategory";
import Button from "./Button";
import StoreCtx from "../store-context/store";
import { useTranslation } from "react-i18next";

const ListItemFilter = () => {
  const { responseData, getSpends, setShowList, showList } =
    useContext(StoreCtx);

  const { t } = useTranslation();
  const showSpends = () => {
    if (responseData) {
      setShowList((prevState) => !prevState);
    }
    if (!responseData && !showList) {
      getSpends();
      setShowList((prevState) => !prevState);
    }
  };
  return (
    <div className="filter-container">
      <SelectCategory />
      <Button text={t(showList ? "hide" : "show")} onClick={showSpends} />
    </div>
  );
};

export default ListItemFilter;
