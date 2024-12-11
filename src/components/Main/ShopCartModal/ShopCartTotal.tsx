import { useContext } from "react";
import { CartContext } from "../../../cartContext/CartContext";
import Button from "../../UI/Button";

interface ShopCartTotalProps {
    setIsCartVisible: (visible: boolean) => void;
}


const ShopCartTotal = ({setIsCartVisible}: ShopCartTotalProps ) => {


    const {cartItems} = useContext(CartContext)!;

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
                    {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} грн.
                </p>
            </div>

                {/*кнопки*/}
                <div className="flex items-center justify-between">
                    <Button className="bg-green-500 p-5 rounded-xl">Зробити замовленя</Button>
                    <Button onClick={() => setIsCartVisible(false)} className="bg-red-500 p-5 rounded-xl">Закрити</Button>
                </div>

            </div>
    );
};

export default ShopCartTotal;