import React from 'react';
import {Container} from "react-bootstrap";
import ProductList from "../components/productList";

const Shop = ({addProduct, wHeadphones, headphones}) => {

    return (
        <div className={"container"}>
            <ProductList addProduct={addProduct} wHeadphones={wHeadphones} headphones={headphones}/>
        </div>
    );
};

export {Shop};