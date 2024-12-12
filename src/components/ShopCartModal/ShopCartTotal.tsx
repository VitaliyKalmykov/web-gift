import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";
import ShopCartButtons from "./ShopCartButtons";

interface ShopCartTotalProps {
    setIsCartVisible: (visible: boolean) => void;
    isDelivery: boolean;
}


const ShopCartTotal = ({setIsCartVisible, isDelivery}: ShopCartTotalProps ) => {

    const {cartItems} = useContext(CartContext)!;

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const finalPrice = totalPrice + (isDelivery ? 100 : 0);

    return (
        <div className="mt-6 flex flex-col gap-4">
            {/*вага*/}
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Загальна вага:</h3>
                <p className="text-xl text-right">
                    {cartItems.reduce((total, item) => total + item.weight * item.quantity, 0)} грам.
                </p>
            </div>

            {/*вартість*/}
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Загальна вартість:</h3>
                <p className="text-xl text-right">
                    {finalPrice}
                </p>
            </div>
               {/*кнопки*/}
                <ShopCartButtons cartItems={cartItems} setIsCartVisible={setIsCartVisible} />
            </div>
    );
};

export default ShopCartTotal;