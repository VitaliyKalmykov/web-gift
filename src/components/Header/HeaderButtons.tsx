import { useContext } from 'react';
import { CartContext } from '../../cartContext/CartContext';  // Імпортуємо CartContext
import SymbolDefs from "../../assets/SymbolDefs";
import {CallContext} from "../../callContext/CallContext"; // Іконки

const HeaderButtons = () => {
    const context = useContext(CartContext); // Отримуємо контекст
    const callContext = useContext(CallContext); // Отримуємо контекст


    if(!callContext) {
        return null;
    }

    if (!context) {
        return null;  // Якщо контекст не ініціалізовано, не рендеримо компонент
    }

    const { isCartVisible, setIsCartVisible, cartItems } = context;
    const { isCallVisible, setIsCallVisible } = callContext;


    // Функція для перемикання видимості кошика
    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
        console.log(isCartVisible)
    };

    const toggleCallVisibility = () => {
        setIsCallVisible(!isCallVisible);
        console.log(isCallVisible)
    }

    return (
        <div className="flex gap-10 items-center">
            {/* Кнопка для кошика */}
            <button className="relative z-50" onClick={toggleCartVisibility}>
                <SymbolDefs
                    className="z-50 w-14 header__svg-fill-primary hover:header__svg-fill-secondary transition duration-300 ease-in-out hover:scale-125"
                    name="basket"/>
                <div className="absolute top-0 -right-8 rounded-full w-8 h-7 bg-red-500 font-semibold">{cartItems.length}</div>
            </button>
            {/* Інші кнопки */}
            <button type="button" className={"z-50"} onClick={toggleCallVisibility}>
                <SymbolDefs className="w-16 header__svg-fill-primary hover:header__svg-fill-secondary transition duration-300 ease-in-out hover:scale-125" name="phone" />
            </button>
        </div>
    );
};

export default HeaderButtons;