import { useTranslation } from "react-i18next";
import "./styles/header.scss";
import { useEffect } from "react";

const Header = () => {
  const { t } = useTranslation();

  useEffect(() => {});

  return (
    <div className="header">
      <h1>{t("company")}</h1>
      <span>{t("title")}</span>
    </div>
  );
};

export default Header;
