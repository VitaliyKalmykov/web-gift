import Button from "../UI/Button";
import {ICartItem} from "../../typization/types";

interface IShopCartButtonsProps {
    setIsCartVisible: (visible: boolean) => void
    cartItems: ICartItem[];
    formRef: React.RefObject<HTMLFormElement>;
}

const ShopCartButtons = ({setIsCartVisible, cartItems, formRef}: IShopCartButtonsProps) => {

    const handleFormSubmit = () => {
        if(formRef.current) {
            formRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        }
    }

    return (
        <div className="flex justify-between">
            {cartItems.length > 0 && (
                <Button   onClick={handleFormSubmit} className="bg-green-500 p-5 rounded-xl">Зробити замовленя</Button>)
            }
            <Button onClick={() => {setIsCartVisible(false);
            }} className="bg-red-500 p-5 rounded-xl">Закрити</Button>
        </div>
    );
};

export default ShopCartButtons;