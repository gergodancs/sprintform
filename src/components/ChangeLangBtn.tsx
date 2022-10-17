import "./styles/changeLangBtn.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLanguage } from "react-icons/fa";
import { useEffect } from "react";

const ChangeLangBtn = () => {
  const { i18n } = useTranslation();

  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguages = () => {
    setIsEnglish((prevState) => !prevState);
  };

  useEffect(() => {
    const languageValue = isEnglish ? "en" : "hu";
    i18n.changeLanguage(languageValue);
  }, [isEnglish, i18n]);

  return (
    <>
      <div className="language">
        <FaLanguage size={40} onClick={toggleLanguages} />
        <span>{isEnglish ? "En" : "Hu"}</span>
      </div>
    </>
  );
};

export default ChangeLangBtn;
