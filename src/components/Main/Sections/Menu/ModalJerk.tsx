import {useState} from "react";
import {ModalJerkProps} from "../../../../typization/types";

const ModalJerk = ({selectedJerk, closeModal}:ModalJerkProps) => {

    const [countPackage, setCountPackage] = useState(1);

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
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
        >
            <div className="bg-white p-5 rounded-xl shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-bold">{selectedJerk?.name}</h2>
                <p>{selectedJerk?.description}</p>
                <div className="flex flex-1 gap-4">
                    <p>Кількість пакунків:</p>
                        <button onClick={removePackage} className="inline-block">-</button>
                        {countPackage}
                        <button onClick={addPackage} className="inline-block">+</button>

                </div>
                <p className="mt-2 font-bold">Підсумок: Вага - {selectedJerk?.weight}. Вартість - {selectedJerk?.price}грн</p>
                <div className="flex justify-between">
                    <button className="mt-4 p-2 bg-green-500 text-white rounded-lg">
                        Додати до столу
                    </button>
                    <button
                        className="mt-4 p-2 bg-red-500 text-white rounded-lg"
                        onClick={closeModal}>
                        Закрити
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalJerk;