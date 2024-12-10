import React, { createContext, useState, ReactNode } from 'react';
import { IJerk, CartContextType } from "../typization/types";

// Оновлений тип для товарів у кошику
interface CartItem extends IJerk {
    quantity: number; // Кількість товару
}

// Створення контексту для кошика
const CartContext = createContext<CartContextType | undefined>(undefined); // Контекст

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false); // Відображення кошика
    const [cartItems, setCartItems] = useState<CartItem[]>([]); // Масив товарів у кошику

    // Додавання товару в кошик
    const addToCart = (item: IJerk, quantity: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => String(cartItem.id) === String(item.id));

            if (existingItem) {
                // Якщо товар уже є в кошику, збільшуємо кількість
                return prevItems.map((cartItem) =>
                    String(cartItem.id) === String(item.id)
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                // Якщо товару немає в кошику, додаємо новий
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    // Видалення товару з кошика
    const removeFromCart = (id: string | number) => {
        setCartItems((prevItems) => prevItems.filter((item) => String(item.id) !== String(id)));
    };

    // Збільшення кількості товару
    const increaseItemQuantity = (id: string | number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                String(item.id) === String(id) // Приводимо id до string
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Зменшення кількості товару
    const decreaseItemQuantity = (id: string | number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                String(item.id) === String(id) && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                isCartVisible,
                setIsCartVisible,
                cartItems,
                addToCart,
                removeFromCart, // Додаємо функцію для видалення товару
                increaseItemQuantity,
                decreaseItemQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };