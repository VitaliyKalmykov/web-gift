import {ICartItem} from "../../typization/types";
import ShopCartItem from "./ShopCartItem";
import {useContext} from "react";
import {CartContext} from "../../cartContext/CartContext";

const ShopCartList = () => {

    const {cartItems, removeFromCart, increaseItemQuantity, decreaseItemQuantity} = useContext(CartContext)!;

    return (
        <div className="h-96 overflow-y-auto">
            <ul className="space-y-4">
                {cartItems.map((item: ICartItem) => (
                    <ShopCartItem key={item.id}
                                  img={item.image}
                                  name={item.name}
                                  price={item.price}
                                  weight={item.weight}
                                  quantity={item.quantity}
                                  id={item.id}
                                  decrease={decreaseItemQuantity}
                                  increase={increaseItemQuantity}
                                  remove={removeFromCart}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ShopCartList;