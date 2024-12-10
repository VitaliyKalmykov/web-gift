import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../../../cartContext/CartContext";
import SymbolDefs from "../../../../../assets/SymbolDefs";
import { IJerk } from "../../../../../typization/types";
import ModalButtons from "./ModalButtons";

interface ModalOrderProps {
    selectedJerk: IJerk | null;
    closeModal: () => void;
}

const ModalOrder = ({ selectedJerk, closeModal }: ModalOrderProps) => {
    const [countPackage, setCountPackage] = useState(1); // Кількість пакунків
    const [totalWeight, setTotalWeight] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    // контекст
    const { addToCart } = useContext(CartContext)!; // Використання контексту

    // Додавання товару до кошика
    const handleAddToCart = () => {
        if (selectedJerk) {
            const cartItem = {
                id: selectedJerk.id,
                image: selectedJerk.image,
                name: selectedJerk.name,
                description: selectedJerk.description,
                price: selectedJerk.price,
                weight: selectedJerk.weight,
            };

            // Додаємо товар до кошика з кількістю
            addToCart(cartItem, countPackage);
        }
    };

    useEffect(() => {
        if (selectedJerk) {
            // Обчислення ваги та вартості на основі countPackage
            setTotalWeight(selectedJerk.weight * countPackage);
            setTotalPrice(selectedJerk.price * countPackage);
        }
    }, [countPackage, selectedJerk]);

    const addPackage = () => {
        setCountPackage(prev => prev + 1); // Збільшення кількості пакунків
    };

    const removePackage = () => {
        setCountPackage(prev => (prev <= 1 ? 1 : prev - 1)); // Зменшення кількості пакунків (мінімум 1)
    };

    return (
        <>
            <div className="flex flex-1 gap-4 items-center">
                <p>Кількість пакунків:</p>
                <button onClick={removePackage} className="inline-block">
                    <SymbolDefs
                        name={"minus"}
                        className="
                            border-2
                            rounded-full
                            border-red-500
                            shadow-red-500
                            w-8 h-8
                            flex justify-center
                            modal__svg-fill--minus"
                    />
                </button>
                <img className="w-8" src={selectedJerk?.image} alt={selectedJerk?.name} />
                <div className="
                    border-2
                    text-3xl
                    text-center
                    border-amber-950
                    flex justify-center
                    w-10 h-10 rounded-full">
                    {countPackage} {/* Відображення кількості пакунків */}
                </div>
                <button onClick={addPackage} className="inline-block">
                    <SymbolDefs
                        name={"plus"}
                        className="
                            border-2
                            rounded-full
                            w-8 h-8
                            shadow-2xl
                            border-green-500
                            shadow-green-500
                            flex justify-center
                            modal__svg-fill--plus"
                    />
                </button>
            </div>
            <p className="mt-2 font-bold">
                Підсумок: Вага - {totalWeight} грам. Вартість - {totalPrice} грн.
            </p>
            <ModalButtons closeModal={closeModal} onAddToCart={handleAddToCart} />
        </>
    );
};

export default ModalOrder;