import {ReactNode} from "react";

//кількість товарів у кошику
export interface CartItem extends IJerk {
    quantity: number;
}

export interface CartContextType {
    isCartVisible: boolean;
    setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: CartItem[]; // Масив товарів із кількістю
    addToCart: (item: IJerk, quantity: number) => void; // Функція для додавання товарів
    increaseItemQuantity: (id: string | number) => void; // Функція для збільшення кількості товару
    decreaseItemQuantity: (id: string | number) => void; // Функція для зменшення кількості товару
    removeFromCart: (id: string | number) => void; // Функція для видалення товару з кошика
}

//Інтерфейс кнопок
export interface IButtonProps {
    type?: "button" | "submit" | "reset"; // Можливі значення атрибуту "type"
    className?: string; // Клас для стилізації
    children: ReactNode; // Дочірній контент, може бути текстом чи іншими елементами
    onClick?: () => void;
}

//Інтерфейс СВГ іконок
export interface ISvgIconsProps  {
    name: 'phone' | 'basket' | "minus" | "plus";
    className?: string;
}

// Інтерфейс для об'єктів карток джерок
export interface IJerk {
    id: number;
    image: string; // Шлях до зображення
    name: string; // Назва джерки
    description: string; // Опис джерки
    price: number; // Ціна джерки
    weight: number;//Вага упаковки
}



//інтерфейс для карток джерок
export interface IFoodCard extends IJerk{
    openProductModal: () => void;
}

//інтерфейс модального вікна
export interface ModalJerkProps {
    selectedJerk: IJerk | null;
    closeModal: () => void;
}