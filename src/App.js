import React from "react";
import "./App.css";
import Publicrouter from "./router/publicrouter";
import { CartProvider } from "./components/cartcontext";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <CartProvider>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <Publicrouter />
      </div>
    </CartProvider>
  );
}
