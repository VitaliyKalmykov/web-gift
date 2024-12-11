import { useContext } from 'react';
import { CartContext } from '../../cartContext/CartContext';  // Імпортуємо CartContext
import SymbolDefs from "../../assets/SymbolDefs"; // Іконки

const HeaderButtons = () => {
    const context = useContext(CartContext); // Отримуємо контекст

    if (!context) {
        return null;  // Якщо контекст не ініціалізовано, не рендеримо компонент
    }

    const { isCartVisible, setIsCartVisible, cartItems } = context;

    // Функція для перемикання видимості кошика
    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
        console.log(isCartVisible)
    };

    return (
        <div className="flex gap-10 items-center">
            {/* Кнопка для кошика */}
            <button className="relative" onClick={toggleCartVisibility}>
                <SymbolDefs
                    className="z-50 w-14 header__svg-fill-primary hover:header__svg-fill-secondary transition duration-300 ease-in-out hover:scale-125"
                    name="basket"/>
                <div className="absolute top-0 -right-8 rounded-full w-8 h-7 bg-red-500 font-semibold">{cartItems.length}</div>
            </button>
            {/* Інші кнопки */}
            <button type="button">
                <SymbolDefs className="w-16 header__svg-fill-primary hover:header__svg-fill-secondary transition duration-300 ease-in-out hover:scale-125" name="phone" />
            </button>
        </div>
    );
};

export default HeaderButtons;