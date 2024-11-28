// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);


// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (course) => {
//         setCart((prevCart) => [...prevCart, course]);
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };


import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };


    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
