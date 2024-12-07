import {ModalJerkProps} from "../../../../../typization/types";
import ModalOrder from "./ModalOrder";

const FoodModal = ({selectedJerk, closeModal}:ModalJerkProps) => {

    return (
        //фоновий бекграунд
        <div
            className="p-2 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}>

            {/*Модальне вікно*/}
            <div className="bg-white p-5 rounded-xl shadow-lg"
                 onClick={(e) => e.stopPropagation()}>

                <h2 className="text-lg text-center font-bold mb-8">{selectedJerk?.name}</h2>
                <img className="mx-auto mb-8" src={selectedJerk?.image} alt={selectedJerk?.name}/>
                <p>{selectedJerk?.description}</p>

                <ModalOrder selectedJerk={selectedJerk}/>

                <div className="flex justify-between">

                    {/*кнопка доданя до кошика*/}
                    <button className="mt-4 p-2 bg-green-500 text-white rounded-lg">
                        Додати до столу
                    </button>

                    {/*кнопка закриття модального вікна*/}
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

export default FoodModal;