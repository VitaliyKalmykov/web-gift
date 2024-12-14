import React, {useState} from "react";
import Input from "../UI/Input";
import { useForm } from '@formspree/react';

interface ICallModalProps {
 formRef: React.RefObject<HTMLFormElement>;
}


const CallModalForm = ({formRef}: ICallModalProps) => {

    //textarea на 240 символів
    const [text, setText] = useState("");

    // Обробник зміни тексту textarea
    const handleChange = (e:any):void => {
        setText(e.target.value);
    };

    //умовни стилі
    const counterStyle = text.length === 240 ? "text-red-500" : "text-gray-500";

    //валідація форми
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState<{ name?: string; phoneNumber?: string }>({});

    //Інпут номеру телефону
    //інпут приймає тількі цифри
    const handleInputPhoneChange = (event:any):void => {
        event.target.value = event.target.value.replace(/[^0-9+]/g, '');
        setPhoneNumber(event.target.value);
    }

    //Інпут нейму
    const handleInputNameChange = (event:any):void => {
        setName(event.target.value);
    }


    const validateForm = () => {
        const newErrors: { name?: string; phoneNumber?: string } = {};
        if (!name.trim()) {
            newErrors.name = "Будь ласка вкажіть як до вас звертатись";
        }
        if (!/^(\+380|0)\d{9}$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Телефон повинен бути у форматі +380XXXXXXXXX.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    //formspree + валідація форми

    const [state, handleSubmit] = useForm("xeoqwynq");


    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            // Якщо валідація успішна, відправляємо форму через Formspree
            handleSubmit(event);
        } else {
            console.log("форма містить помилки");
        }
    }



    return (
        <>
        {state.succeeded  && <p className="text-green-900 font-bold text-xl">Дякую за замовлення ! З вами скоро зв&apos;яжуться!</p>}
        <form
            ref={formRef}
            onSubmit={formSubmit}
            action="https://formspree.io/f/xeoqwynq"
            method="POST"
            className="p-4 flex flex-col">
            <Input
                htmlFor={"name"}
                   type={"text"}
                   id={"name"}
                   name={"Name"}
                   placeholder={"Ваше ім'я..."}
                   classNameInput={"w-full border-2 border-blue-100 rounded-full p-4 mb-4"}
                onChange={handleInputNameChange}
            >
                {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
            </Input>
            <Input
                htmlFor={"phoneNumber"}
                type={"text"}
                id={"phoneNumber"}
                name={"Phone Number"}
                placeholder={"Номер телефону: +380..."}
                classNameInput={"w-full border-2 border-blue-100 rounded-full p-4 mb-4"}
                onInput={handleInputPhoneChange}
            >
                {errors.phoneNumber && <p className="text-red-500 text-sm mb-2">{errors.phoneNumber}</p>}
            </Input>
            <div className="relative">
            <textarea
                maxLength={240}
                placeholder={"Ваше зверненя..."}
                className="w-full h-48 border-2 border-blue-100 rounded-xl resize-none p-4 mb-4"
                value={text}
                name="Message"
                onChange={handleChange}
            />
                <div className={`absolute bottom-7 right-4 text-sm ${counterStyle}`}>
                    {text.length} / 240
                </div>
            </div>
        </form>
        </>
    )
}

export default CallModalForm