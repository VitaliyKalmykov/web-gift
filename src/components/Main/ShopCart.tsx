import { useContext } from 'react';
import { CartContext } from '../../cartContext/CartContext'; // Імпортуємо CartContext
import Button from "../UI/Button"; // Кнопка для кошика

const ShopCart = () => {
    const context = useContext(CartContext); // Отримуємо значення з контексту

    if (!context) {
        return null;  // Якщо контекст ще не ініціалізовано, не рендеримо компонент
    }

    const { isCartVisible, setIsCartVisible  } = context;

    // Якщо кошик не видимий, не рендеримо компонент
    if (!isCartVisible) {
        return null;
    }

    const closeCart = () => {
        setIsCartVisible(false)
    };

    return (
        <div className="p-2 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
             onClick={closeCart}>
            <div className="background text-color-primary p-5 rounded-xl shadow-2xl w-48 h-48"
                 onClick={(e) => e.stopPropagation()}>
                <h2>Ваше замовлення:</h2>
                <Button type="button" className="button">123</Button>
                {/* Додайте інші елементи кошика тут */}
            </div>
        </div>
    );
};

export default ShopCart;