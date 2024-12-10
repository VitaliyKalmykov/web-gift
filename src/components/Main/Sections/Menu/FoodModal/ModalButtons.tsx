interface ModalButtonsProps {
    closeModal: () => void;
    onAddToCart: () => void; // Додаємо нову функцію як пропс
}

const ModalButtons = ({ closeModal, onAddToCart }: ModalButtonsProps) => {
    return (
        <div className="flex justify-between">
            <button
                onClick={() => {onAddToCart(); closeModal()}}
                className="mt-4 p-2 bg-green-500 text-white rounded-lg"
            >
                Додати до кошика
            </button>
            <button
                onClick={closeModal}
                className="mt-4 p-2 bg-red-500 text-white rounded-lg"
            >
                Закрити
            </button>
        </div>
    );
};

export default ModalButtons;