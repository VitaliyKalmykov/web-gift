import SymbolDefs from "../../../assets/SymbolDefs";
import Button from "../../UI/Button";

const ShopCartItem = ({img, name, weight, price, quantity, id, decrease, increase, remove}: any) => {
    return (
        <li className="flex items-center justify-between gap-4 p-2 border-b border-gray-300">
            <img className="w-24 h-24" src={img} alt="jerkPic"/>
            <div className="flex-1">
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-gray-600">Вага: {weight} г</p>
                <p className="text-sm text-gray-600">Ціна: {price} грн</p>
                <div className="flex items-center gap-2">
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