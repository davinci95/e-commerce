import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./Data";
import Sdata from "./component/shops/Sdata";

import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";

const App = () => {
   const { productItems } = Data;
   const { shopItems } = Sdata;
   console.log(productItems);
   const [cartItem, setCartItem] = useState([]);

   const addToCart = (product) => {
      const productExit = cartItem.find((item) => item.id === product.id);
      console.log(productExit);

      if (productExit) {
         setCartItem(
            cartItem.map((item) =>
               item.id === product.id
                  ? { ...productExit, qty: productExit.qty + 1 }
                  : item
            )
         );
      } else {
         setCartItem([...cartItem, { ...product, qty: 1 }]);
      }
   };
   const decreaseQty = (product) => {
      console.log(product);
      const productExit = cartItem.find((item) => item.id === product.id);
      console.log(productExit);
      if (productExit.qty === 1) {
         setCartItem(cartItem.filter((item) => item.id !== product.id));
      } else {
         setCartItem(
            cartItem.map((item) =>
               item.id === product.id
                  ? { ...productExit, qty: productExit.qty - 1 }
                  : item
            )
         );
      }
   };

   const removeCart = (product) => {
      if (cartItem.length === 1) {
         setCartItem([]);
      } else {
         setCartItem(cartItem.filter((item) => item.id !== product.id));
         console.log(product);
      }
   };
   return (
      <Router basename="/e-commerce">
         <Header cartItem={cartItem} />
         <Routes>
            <Route
               path="/e-commerce"
               element={
                  <Pages
                     productItems={productItems}
                     addToCart={addToCart}
                     shopItems={shopItems}
                  />
               }
            />
            <Route
               path="/e-commerce/cart"
               element={
                  <Cart
                     cartItem={cartItem}
                     addToCart={addToCart}
                     decreaseQty={decreaseQty}
                     removeCart={removeCart}
                  />
               }
            />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;
