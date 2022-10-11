import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Component/Header/Header';

export const ProductContext = createContext()

const Main = () => {
    const products = useLoaderData();

    return (

            <ProductContext.Provider value={products}>
                 <Header></Header>
                 <Outlet></Outlet>
            </ProductContext.Provider>

    );
};

export default Main;