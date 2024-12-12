import Button from "../UI/Button";
import {ICartItem} from "../../typization/types";

interface IShopCartButtonsProps {
    setIsCartVisible: (visible: boolean) => void
    cartItems: ICartItem[];
}

const ShopCartButtons = ({setIsCartVisible, cartItems}: IShopCartButtonsProps) => {
    return (
        <div className="flex justify-between">
            {cartItems.length > 0 && (
                <Button className="bg-green-500 p-5 rounded-xl">Зробити замовленя</Button>)
            }
            <Button onClick={() => {setIsCartVisible(false);
            }} className="bg-red-500 p-5 rounded-xl">Закрити</Button>
        </div>
    );
};

export default ShopCartButtons;