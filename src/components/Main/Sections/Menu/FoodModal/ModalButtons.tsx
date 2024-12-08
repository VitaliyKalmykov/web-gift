interface ModalButtonsProps {
    closeModal: () => void; // Типізація функції закриття
}

const ModalButtons = ({closeModal}:ModalButtonsProps) => {

    return (
        <div className="flex justify-between">

            {/*кнопка доданя до кошика*/}
            <button
                className="mt-4 p-2 bg-green-500 text-white rounded-lg">
                Додати до столу
            </button>

            {/*кнопка закриття модального вікна*/}
            <button
                className="mt-4 p-2 bg-red-500 text-white rounded-lg"
                onClick={closeModal}>
                Закрити
            </button>
        </div>
    );
};

export default ModalButtons;