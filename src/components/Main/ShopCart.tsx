import { useContext } from 'react';
import { CartContext} from "../../cartContext/CartContext";
import { CartItem} from "../../typization/types";
import SymbolDefs from "../../assets/SymbolDefs";

const ShopCart = () => {
    const { setIsCartVisible, isCartVisible, cartItems, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext)!;

    console.log('Cart visible in ShopCart:', isCartVisible);  // Лог видимості кошика


    if (!isCartVisible) {
        return null; // Якщо кошик не видимий, не рендеримо його
    }

    return (
        <div onClick={() => {setIsCartVisible(false)}}  className="p-4 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Ваш кошик</h2>
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-600">Ваш кошик порожній.</p>
                ) : (
                    <div>
                        <ul className="space-y-4">
                            {cartItems.map((item: CartItem) => (
                                <li key={item.id} className="flex items-center justify-between p-4 border-b border-gray-300">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4"/>
                                    <div className="flex-1">
                                        <h3 className="font-bold">{item.name}</h3>
                                        <p className="text-sm text-gray-600">Вага: {item.weight} г</p>
                                        <p className="text-sm text-gray-600">Ціна: {item.price} грн</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => decreaseItemQuantity(item.id)}
                                            className="p-2 border rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                                        >
                                            <SymbolDefs name="minus" className="w-4 h-4"/>
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseItemQuantity(item.id)}
                                            className="p-2 border rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                                        >
                                            <SymbolDefs name="plus" className="w-4 h-4"/>
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="ml-4 p-2 border rounded-full bg-gray-500 text-white hover:bg-gray-600 transition"
                                        >
                                            Видалити
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <h3 className="font-bold text-lg">Загальна вага:</h3>
                                <p className="text-xl text-right">
                                    {cartItems.reduce((total, item) => total + item.weight * item.quantity, 0)} грам.
                                </p>
                            <h3 className="font-bold text-lg">Загальна вартість:</h3>
                            <p className="text-xl text-right">
                            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} грн.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    ;
};

export default ShopCart;