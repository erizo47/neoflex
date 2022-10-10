import React from 'react';
import CartProductItem from "../components/cartProductItem";


const Cart = ({addedProducts, handleAddProduct, handleDescreaseProduct, cartProductsSum, handleDeleteProduct}) => {

    return (

            <div className={"cartContainer"}>
            <p className={"cartTitle"}>Корзина</p>
                <div className={"cartInformation"}>
                    <div className={"cartList"}>
                        {addedProducts.map((x) => <CartProductItem product={x} handleDeleteProduct={handleDeleteProduct} handleAddProduct={handleAddProduct} handleDescreaseProduct={handleDescreaseProduct}/>)}
                    </div>
                    <div className={"cartMenu"}>
                        <div className={"cartAmount"}>
                            <div className={"cartAmountTitle"}>ИТОГО</div>
                            <div className={"cartAmountSum"}>&#8381; {cartProductsSum()}</div>
                        </div>
                        <div className="cartContinue">
                            <a className={"cartContinueTitle"}>Перейти к оформлению</a>
                        </div>
                    </div>

                </div>




            </div>

    );
};
export {Cart};

