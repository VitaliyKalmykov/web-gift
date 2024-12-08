import {useState, useEffect} from "react";
import SymbolDefs from "../../../../../assets/SymbolDefs";
import {IJerk} from "../../../../../typization/types";

interface ModalOrderProps {
    selectedJerk: IJerk | null;
}


const ModalOrder = ({selectedJerk}:ModalOrderProps) => {

    const [countPackage, setCountPackage] = useState(1);
    const [totalWeight, setTotalWeight] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        if (selectedJerk) {
            // Обчислення ваги та вартості на основі countPackage
            setTotalWeight(selectedJerk.weight * countPackage);
            setTotalPrice(selectedJerk.price * countPackage);
        }
    }, [countPackage, selectedJerk]);

    const addPackage = () => {
        setCountPackage(countPackage + 1);
    }
    const removePackage = () => {
        setCountPackage(countPackage - 1);
        if(countPackage <= 1) {
            setCountPackage(1)
        }
    }

    return (
        <>
        <div className="flex flex-1 gap-4 items-center">
            <p>Кількість пакунків:</p>
            <button onClick={removePackage} className="inline-block">
                <SymbolDefs name={"minus"} className="
                border-2
                rounded-full
                border-red-500
                shadow-red-500
                w-8 h-8
                flex justify-center
                modal__svg-fill--minus"/>
            </button>
            <img className="w-8" src={selectedJerk?.image} alt={selectedJerk?.name}/>
            <div className="
            border-2
            text-3xl
            text-center
            border-amber-950
            flex justify-center
            w-10 h-10 rounded-full">
                {countPackage}
            </div>
            <button onClick={addPackage} className="inline-block">
                <SymbolDefs name={"plus"} className="
                border-2
                rounded-full
                w-8 h-8
                shadow-2xl
                border-green-500
                shadow-green-500
                flex justify-center
                modal__svg-fill--plus
                "/>
            </button>
        </div>
    <p className="mt-2 font-bold">Підсумок: Вага - {totalWeight} грам. Вартість - {totalPrice} грн.</p>
        </>);
};

export default ModalOrder;