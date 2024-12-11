import { useContext } from 'react';
import { CartContext} from "../../cartContext/CartContext";
import ShopCartList from "./ShopCartList";
import ShopCartTotal from "./ShopCartTotal";

const ShopCart = () => {
    const { setIsCartVisible, isCartVisible, cartItems } = useContext(CartContext)!;

    if (!isCartVisible) {
        return null; // Якщо кошик не видимий, не рендеримо його
    }

    return (
        <div onClick={() => {setIsCartVisible(false)}}  className="p-4 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-2/6">
                <h2 className="text-2xl font-bold mb-4">Ваш кошик</h2>
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-600">Ваш кошик порожній.</p>
                ) : (
                    <>
                    <ShopCartList/>
                        <ShopCartTotal setIsCartVisible={setIsCartVisible} />
                    </>
                )}
            </div>
        </div>
    );
    ;
};

export default ShopCart;