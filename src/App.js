import React from 'react';
import Header from "./components/header";
import "./App.css"
import {Shop} from "./pages/Shop";
import {Cart} from "./pages/cart"
import Footer from "./components/footer";
import {useState} from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";

const App = () => {

    const [addedProducts, setAddedProducts] = useState([])
    const handleAddProduct = (product) => {
        let clonedProducts = JSON.parse(JSON.stringify(addedProducts));
        let foundedProduct = clonedProducts.find(item => item.id === product.id)
        if(foundedProduct) {
            foundedProduct.amount = foundedProduct.amount + 1
            setAddedProducts(clonedProducts)
        } else {
            setAddedProducts([...clonedProducts, {...product, amount: 1}])
        }

    }
    const handleDescreaseProduct = (product) => {
        let clonedProducts = JSON.parse(JSON.stringify(addedProducts));
        let foundedProduct = clonedProducts.find(item => item.id === product.id)
        if(foundedProduct) {
            foundedProduct.amount = foundedProduct.amount - 1
            setAddedProducts(clonedProducts)
        }

    }
    const cartProductsSum = () => {
        let  productsSum = 0;
        addedProducts.forEach(item => productsSum = productsSum + (item.price * item.amount))
        return productsSum
    }
    console.log('addedProducts in App: ', addedProducts)
    const headphones = [
        {
            img: "/img/Image13.png",
            title: "Apple BYZ S852I",
            price: 2927,
            rate: "4.7",
            id: 1
        },
        {
            img: "/img/Image14.png",
            title: "Apple EarPods",
            price: 2327,
            rate: "4.5",
            id: 2
        },
        {
            img: "/img/Image15.png",
            title: "Apple EarPods",
            price: 2329,
            rate: "4.6",
            id: 3
        },
        {
            img: "/img/Image16.png",
            title: "Apple BYZ S852I",
            price: 2922,
            rate: "4.7",
            id: 4
        },
        {
            img: "/img/Image17.png",
            title: "Apple EarPods",
            price: 2337,
            rate: "4.5",
            id: 5
        },
        {
            img: "/img/Image18.png",
            title: "Apple EarPods",
            price: 2229,
            rate: "4.6",
            id: 6
        }

    ]
    const wirelessHeadphones = [
        {
            img: "/img/Image19.png",
            title: "Apple AirPods",
            price: 9527,
            rate: "4.7",
            id: 7
        },
        {
            img: "/img/Image20.png",
            title: "GERLAX GH-04",
            price: 6527,
            rate: "4.7",
            id: 8
        },
        {
            img: "/img/Image21.png",
            title: "BOROFONE BO4",
            price: 7527,
            rate: "4.7",
            id: 9
        }
]


     return (
            <div>

                <BrowserRouter>
                    <Header addedProducts={addedProducts}/>
                    <Routes>
                        <Route path={"/"} element={<Shop addProduct={handleAddProduct} headphones={headphones} wHeadphones={wirelessHeadphones} />} />
                        <Route path={"/cart"} element={<Cart addedProducts={addedProducts} handleAddProduct={handleAddProduct} handleDescreaseProduct={handleDescreaseProduct} cartProductsSum={cartProductsSum}/>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>

            </div>
    );
};

export default App;