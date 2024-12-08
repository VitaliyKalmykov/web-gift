import {ReactNode} from "react";

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