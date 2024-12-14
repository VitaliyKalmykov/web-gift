import {useState} from "react";
import Input from "../UI/Input";

const CallModalForm = () => {

    //інпут приймає тількі цифри
    const handleInputChange = (event:any):void => {
        event.target.value = event.target.value.replace(/[^0-9+]/g, '');
    }

    //textarea на 240 символів
    const [text, setText] = useState("");

    // Обробник зміни тексту
    const handleChange = (e:any):void => {
        setText(e.target.value);
    };

    return (
        <form className="p-4 flex flex-col">
            <Input
                htmlFor={"name"}
                   type={"text"}
                   id={"name"}
                   name={"Name"}
                   placeholder={"Ваше ім'я..."}
                   classNameInput={"w-full border-2 border-blue-100 rounded-full p-4 mb-4"}
            />
            <Input
                htmlFor={"phoneNumber"}
                type={"text"}
                id={"phoneNumber"}
                name={"Phone Number"}
                placeholder={"Номер телефону: +380..."}
                classNameInput={"w-full border-2 border-blue-100 rounded-full p-4 mb-4"}
                onInput={handleInputChange}
            />
            <div className="relative">
            <textarea
                maxLength={240}
                placeholder={"Ваше зверненя..."}
                className="w-full h-48 border-2 border-blue-100 rounded-xl resize-none p-4 mb-4"
                value={text}
                onChange={handleChange}
            />
                <div className="absolute bottom-7 right-4 text-sm text-gray-500">
                    {text.length} / 240
                </div>
            </div>
        </form>
    )
}

export default CallModalForm