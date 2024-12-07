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


//інтерфейс модального вікна
export interface ModalJerkProps {
    selectedJerk: IJerk | null;
    closeModal: () => void;
}

//інтерфейс для карток джерок
export interface IFoodCard {
    image: string;
    name: string;
    description: string;
    price: number;
    weight: number;//Вага упаковки
    openProductModal: () => void;
}