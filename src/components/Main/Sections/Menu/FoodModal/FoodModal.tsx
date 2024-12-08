import {ModalJerkProps} from "../../../../../typization/types";
import ModalOrder from "./ModalOrder";
import ModalOrderDescription from "./ModalOrderDescription";
import ModalButtons from "./ModalButtons";

const FoodModal = ({selectedJerk, closeModal }:ModalJerkProps) => {

    return (
        //фоновий бекграунд
        <div
            className="p-2 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeModal}>

            {/*Модальне вікно*/}
            <div className="background text-color-primary p-5 rounded-xl shadow-2xl"
                 onClick={(e) => e.stopPropagation()}>
                <ModalOrderDescription selectedJerk={selectedJerk} />
                <ModalOrder selectedJerk={selectedJerk}/>
                <ModalButtons closeModal={closeModal} />
                </div>
            </div>
    );
};

export default FoodModal;