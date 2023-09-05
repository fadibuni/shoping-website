import { createContext, useState, useEffect } from "react";

import PRODCUTS from "../utils/firebase/shop-data.json"

export const ProductsContext = createContext({
    products: [],
  });

  export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODCUTS);
    const value = { products };
  
    useEffect(() => {
    }, []);
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
  };
  