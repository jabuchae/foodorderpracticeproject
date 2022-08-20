import React from "react";
import { CartContextProvider } from "./components/cart/CartContext";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <CartContextProvider>
      <Navigation />
      <Home />
    </CartContextProvider>
  );
}

export default App;
