/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const NewDataContext = createContext(null);

export const NewDataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const updateProducts = res.data.products.map((product) => ({
        ...product,
        id: `ps-${product.id}`,
       
      }));
      setData(updateProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const getUniqueCategories = (items, key) => {
    if(!items) return[];
    const values = items.map((item) => item[key]);
    return ["All", ...new Set(values)];
    
  };

  const categoryList = getUniqueCategories(data, "category");

  return (
    <NewDataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryList,
      }}
    >
      {children}
    </NewDataContext.Provider>
  );
};
export const useNewData = () => useContext(NewDataContext);