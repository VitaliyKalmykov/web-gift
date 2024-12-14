import { useContext } from "react";
import { CallContext } from "../../callContext/CallContext";
import Button from "../UI/Button";
import CallModalForm from "./CallModalForm";

const CallModal = () => {
    const callContext = useContext(CallContext); // Отримуємо контекст

    if (!callContext) {
        // Якщо контекст не ініціалізований, не рендеримо компонент
        return null;
    }

    const { isCallVisible, setIsCallVisible } = callContext;

    if (!isCallVisible) {
        // Якщо модалка має бути прихованою, не рендеримо компонент
        return null;
    }

    const closeModal = () => {
        setIsCallVisible(false);
    }


       return (
           <div onClick={closeModal} className="p-4 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
               <div onClick={(e) => {e.stopPropagation()}} className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-center mb-4">Маєте пропозицію чи хочете оформити замовленя по телефону?</h2>
                   <h3>Заповніть форму та я особисто зв&apos;яжусь з вами найближчим часом:</h3>
                   <CallModalForm/>
                  <div className="flex flex-1 justify-between">
                      <Button
                          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                          Замовити дзвінок
                      </Button>
                      <Button
                          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={closeModal}
                      >
                          Close
                      </Button>
                  </div>
               </div>
           </div>
       );
};

export default CallModal;