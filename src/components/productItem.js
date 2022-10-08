import React, {useState} from 'react';

const ProductItem = ({product, addProduct}) => {

    return (
        <div className={"productItem"} id={product.price} key={product.price}>
            <div className={"productImage"}>
                <img src={process.env.PUBLIC_URL + product.img} alt={product.title}/>
            </div>
            <div className={"productInfo"}>
                <div className={"productTitlePrice"}>
                    <div className={"productTitle"}>
                        {product.title}
                    </div>
                    <div className={"productPrice"}>
                        <span>{product.price} &#8381;</span>
                    </div>
                </div>
                <div className={"productRateBuy"}>
                    <div className={"productRate"}>
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6268 18.0143L5.41621 22.3656L7.3765 14.2449L0.960785 8.81491L9.38218 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8772 14.2449L19.8375 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
                        </svg>
                        {product.rate}
                    </div>
                    <button className={"productBuyButton"} onClick={() => addProduct(product)}>Купить</button>
                </div>

            </div>
        </div>
    );
};

export default ProductItem;