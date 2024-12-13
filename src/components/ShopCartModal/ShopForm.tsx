import React, {useState} from 'react';
import Input from "../UI/Input";


interface IShopFormProps {
    setIsDelivery: (isDelivery: boolean) => void;
    formRef: React.RefObject<HTMLFormElement>;
}

const ShopForm = ({setIsDelivery, formRef}: IShopFormProps) => {

    //стани для валідації форми
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState<{name?: string; phoneNumber?: string}>({})

    const validateForm = () => {
        const newErrors: {name?: string; phoneNumber?: string} = {};
        if(!name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!/^(\+380|0)\d{9}$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Телефон повинен бути у форматі +380XXXXXXXXX.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(validateForm()) {
              console.log("форма надіслана!")
        }
        else {
            console.log("форма містить помилки")
        }
    }

    return (
        <form onSubmit={formSubmit} ref={formRef} className="h-96 flex flex-col gap-4">
            <Input
                htmlFor="name"
                classNameLabel="block text-gray-700 font-bold mb-2"
                classNameInput="block w-full border-2 border-blue-100 p-2 mb-4"
                type="text"
                id="name"
                placeholder="Ваше ім&#39;я"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            >
                Ваше ім&#39;я*
                {/* Виведення помилки для імені */}
                {errors.name && <span className="text-red-500 p-2 text-sm">{errors.name}</span>}
            </Input>



            <Input
                htmlFor="phoneNumber"
                classNameLabel="block text-gray-700 font-bold mb-2"
                classNameInput="block w-full border-2 border-blue-100 p-2 mb-4"
                type="text"
                id="phoneNumber"
                placeholder="+380...."
                name="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            >
                Ваш телефон*
                {/* Виведення помилки для телефону */}
                {errors.phoneNumber && <span className="text-red-500 p-2 text-sm">{errors.phoneNumber}</span>}
            </Input>

            <Input
                htmlFor="adress"
                classNameLabel="block text-gray-700 font-bold mb-2"
                classNameInput="block w-full border-2 border-blue-100 p-2 mb-4"
                type="text"
                id="adress"
                placeholder="Місто, вулиця, будниок...."
                name="Adress"
            >
                Ваша адреса
            </Input>

            <label>
                <input
                    type="radio"
                    name="delivery"
                    value="delivery"
                    onClick={() => setIsDelivery(true)}
                /> Доставка на дім(+100грн до замовленя, тільки місто Львів!)
            </label>

            <label>
                <input
                    type="radio"
                    name="delivery"
                    value="pickup"
                    onClick={() => setIsDelivery(false)}
                /> Самовивіз
            </label>

        </form>
    );
};

export default ShopForm;