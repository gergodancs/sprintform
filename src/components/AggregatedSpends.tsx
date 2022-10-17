import { useContext } from "react";
import "./styles/aggregated.scss";
import StoreCtx from "../store-context/store";
import { useTranslation } from "react-i18next";
import {
  getAggregatedValues,
  getAggregatedValuesByCategory,
} from "../helpers/helpers";

const AggregatedSpends = () => {
  const { responseData } = useContext(StoreCtx);
  const { t } = useTranslation();

  return (
    <>
      {responseData && (
        <table>
          <thead>
            <tr>
              <th>{t("category")}</th>
              <th>{t("sum")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{t("all")}</th>
              <th>{getAggregatedValues(responseData)}</th>
            </tr>

            {getAggregatedValuesByCategory(responseData).map((category, i) => {
              return (
                <tr key={i}>
                  <td>{category.category}</td>
                  <td>{category.sum}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AggregatedSpends;
