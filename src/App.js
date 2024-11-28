import React from "react";
import "./App.css";
import Publicrouter from "./router/publicrouter";
import { CartProvider } from "./components/cartcontext";


export default function App() {
  return (
    <CartProvider> 
    <div>
      <Publicrouter />
    </div>
    </CartProvider>
  );
}
