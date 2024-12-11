import SymbolDefs from "../../assets/SymbolDefs";
import Button from "../UI/Button";

interface IShopCartProps {
    img: string;
    name: string;
    price: number;
    weight: number;
    quantity: number;
    id: string;
    decrease: void;
    increase: void;
    remove: void;
}

const ShopCartItem = ({img, name, weight, price, quantity, id, decrease, increase, remove}: IShopCartProps) => {
    return (
        <li className="flex items-center justify-center flex-1 p-2 border-gray-300">
            <img className="w-24 h-24" src={img} alt="jerkPic"/>
            <div className="flex text-center items-center gap-4">
                <div>
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm text-gray-600">Вага: {weight} г</p>
                    <p className="text-sm text-gray-600">Ціна: {price} грн</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Button
                        onClick={() => decrease(id)}
                        className="p-2 border rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        <SymbolDefs name="minus" className="w-4 h-4"/>
                    </Button>
                    <span className="mx-2">{quantity}</span>
                    <Button
                        onClick={() => increase(id)}
                        className="p-2 border rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    >
                        <SymbolDefs name="plus" className="w-4 h-4"/>
                    </Button>
                </div>
               <div className="">
                   <Button
                       onClick={() => remove(id)}
                       className="ml-4 p-2 border rounded-full bg-gray-500 text-white hover:bg-gray-600 transition"
                   >
                       Видалити
                   </Button>
               </div>
            </div>
        </li>
    );
};

export default ShopCartItem;