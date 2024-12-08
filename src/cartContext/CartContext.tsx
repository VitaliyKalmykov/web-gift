import React, { createContext, useState, ReactNode } from 'react';

// Типи для контексту
interface CartContextType {
    isCartVisible: boolean;
    setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// Створення контексту з дефолтним значенням
const CartContext = createContext<CartContextType | undefined>(undefined);

// Провайдер для кошика
const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Створення стану для видимості кошика
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

    return (
        <CartContext.Provider value={{ isCartVisible, setIsCartVisible }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };