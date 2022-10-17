import { useTranslation } from "react-i18next";
import "./styles/header.scss";
import { useEffect } from "react";
import ChangeLangBtn from "./ChangeLangBtn";

const Header = () => {
  const { t } = useTranslation();

  useEffect(() => {});

  return (
    <div className="header">
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Header;
