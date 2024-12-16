import {ReactNode} from "react";
import React from "react";

//кількість товарів у кошику
export interface ICartItem extends IJerk {
    quantity: number;
}

// Інтерфейс для об'єктів карток джерок
export interface IJerk {
    id: string;
    image: string; // Шлях до зображення
    name: string; // Назва джерки
    description: string; // Опис джерки
    price: number; // Ціна джерки
    weight: number;//Вага упаковки
}

export interface ICartContextType {
    isCartVisible: boolean;
    setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: ICartItem[]; // Масив товарів із кількістю
    addToCart: (item: IJerk, quantity: number) => void; // Функція для додавання товарів
    increaseItemQuantity: (id: string | number) => void; // Функція для збільшення кількості товару
    decreaseItemQuantity: (id: string | number) => void; // Функція для зменшення кількості товару
    removeFromCart: (id: string | number) => void; // Функція для видалення товару з кошика
}

//Інтерфейс інпуту
export interface IInputProps {
    htmlFor: string;
    classNameLabel?: string;
    classNameDiv?: string;
    classNameInput?: string;
    children?: ReactNode;
    type: string;
    id: string;
    placeholder?: string;
    name: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Коректний тип
    pattern?: string;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//Інтерфейс кнопок
export interface IButtonProps {
    type?: "button" | "submit" | "reset"; // Можливі значення атрибуту "type"
    className?: string; // Клас для стилізації
    children: ReactNode; // Дочірній контент, може бути текстом чи іншими елементами
    onClick?: () => void;
    onSubmit?: () => void;
}

//Інтерфейс СВГ іконок
export interface ISvgIconsProps  {
    name: 'phone' | 'basket' | "minus" | "plus" | 'arrow';
    className?: string;
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