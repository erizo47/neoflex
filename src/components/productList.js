import React from 'react';
import ProductItem from "./productItem";


const ProductList = ({addProduct, wHeadphones, headphones}) => {

    return     (
        <div>
            <p className={"headphones"}>Наушники</p>
            <div className={"productList"}>
                {headphones.map((x) => <ProductItem product={x} addProduct={addProduct}/>)}
            </div>
            <p className={"headphones"}>Беспроводные наушники</p>
            <div className={"productList"}>
                {wHeadphones.map((x) => <ProductItem product={x} addProduct={addProduct}/>)}
            </div>
        </div>

    );
};

export default ProductList;