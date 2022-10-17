import React, { useState } from "react";
import axios from "axios";
import { TrackerResponse } from "../helpers/model/model";

const StoreCtx = React.createContext({
  responseData: [],
  isLoading: false,
  setResponseData: void {},
  getSpends: void {},

  showList: false,
  setShowList: void {},
  selectedCategory: [],
  setSelectedCategory: void {},
});

export const ContextProvider = (props) => {
  const [responseData, setResponseData] = useState<TrackerResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [showList, setShowList] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const getSpends = async () => {
    setIsLoading(true);
    const url = "https://development.sprintform.com/transactions.json";
    const response = await axios(url);
    setResponseData(response.data);
    setSelectedCategory(response.data);
    setIsLoading(false);
  };
  return (
    <StoreCtx.Provider
      value={{
        responseData,
        isLoading: isLoading,
        setResponseData,
        getSpends,
        showList,
        setShowList,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {props.children}
    </StoreCtx.Provider>
  );
};

export default StoreCtx;
