import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            const updateData = res.data.map((item) => ({
                ...item,
                id: `fs-${item.id}`,
                source: "fakestore",
            }))
            setData(updateData)
        } catch (error) {
            console.log("error fetchin data:", error)
        }
    };
    useEffect(() => {
        fetchAllProducts()
    }, [])

    const getUniqueCategories = (data, property) => {
        const newVal = ["All", ...new Set(data?.map((cur) => cur[property]))];
        return newVal;
    };

    const categoryList = getUniqueCategories(data, "category")
    return (
        <DataContext.Provider value={{
            data,
            setData,
            categoryList,
            fetchAllProducts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const getData = () => useContext(DataContext)
