import { useContext, useState, useRef } from 'react';
import { CartContext} from "../../cartContext/CartContext";
import ShopCartList from "./ShopCartList";
import ShopCartTotal from "./ShopCartTotal";
import ShopCartButtons from "./ShopCartButtons";
import ShopForm from "./ShopForm";

const ShopCart = () => {
    const { setIsCartVisible, isCartVisible, cartItems } = useContext(CartContext)!;

    //ссилка на форму для кнопки
    const formRef = useRef<HTMLFormElement | null>(null);


    //доставка
    const [isDelivery, setIsDelivery] = useState(false);

    if (!isCartVisible) {
        return null; // Якщо кошик не видимий, не рендеримо його
    }

    return (
        <div onClick={() => {setIsCartVisible(false)}}  className="p-4 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6">
                {cartItems.length === 0 ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Ваш кошик</h2>
                        <p className="text-center text-gray-600">Ваш кошик порожній.</p>
                        <ShopCartButtons
                            setIsCartVisible={setIsCartVisible}
                            cartItems={cartItems}
                            formRef={formRef}
                        />
                    </>
                ) : (
                    <>
                        <div className="flex justify-center items-center gap-10">
                            <div>
                                <h2 className="text-2l font-bold mb-4">Заповніть форму для замовлення:</h2>
                                <ShopForm formRef={formRef} setIsDelivery={setIsDelivery} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Ваш кошик</h2>
                                <ShopCartList/>
                            </div>
                        </div>
                        <ShopCartTotal formRef={formRef} setIsCartVisible={setIsCartVisible} isDelivery={isDelivery} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ShopCart;