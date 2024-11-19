import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Food from "./components/Food/Food";
import Header from "./components/Layout/Header";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isVisibleCart, setIsVisibleCart] = useState(false)

  const showCartHandler = () => {
    setIsVisibleCart(true)
  }
  const hideCartHandler = () => {
    setIsVisibleCart(false)
  }

  return (
    <CartContextProvider>
      {isVisibleCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Food />
      </main>
    </CartContextProvider>
  );
}

export default App;
