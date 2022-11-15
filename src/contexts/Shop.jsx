import { createContext, useState } from "react";
import React from "react";

export const Shop = createContext({});

const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) => {

        const flagRepeated = isProductRepeated(productToAdd.id)
        if (flagRepeated) {
            
        } else {
            setProducts([...products, productToAdd])
        }
    }

    const isProductRepeated = (id) => {
        return products.some(product => product.id === id);
    }

    //Eliminar un producto

    //Vaciar el carrito

    //Cálculo del total

    //Cálculo del total de items del carrito

    return  <Shop.Provider value={{products, addProduct}}>
                {children}
            </Shop.Provider>;
};

export default ShopProvider;