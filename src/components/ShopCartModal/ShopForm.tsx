import React, { useState, useEffect } from 'react';
import Input from "../UI/Input";
import { useForm } from '@formspree/react';
import {ICartItem} from "../../typization/types";

interface IShopFormProps {
    setIsDelivery: (isDelivery: boolean) => void;
    formRef: React.RefObject<HTMLFormElement>;
    cartItems: ICartItem[];
}

const ShopForm = ({ setIsDelivery, formRef, cartItems  }: IShopFormProps) => {



    //корзина на пошту
    const [cartPost, setCartPost] = useState('')



    //формування корзини на пошту
    useEffect(() => {
        if (cartItems.length > 0) {
            const cartDetails = cartItems.map((item, index) => {
                const totalPrice = item.price * item.quantity;
                const totalWeight = item.weight * item.quantity;
                return `
          Товар ${index + 1}: ${item.name}, 
          Кількість: ${item.quantity}, 
          Ціна: ${totalPrice} грн, 
          Вага: ${totalWeight} грам`;
            }).join("\n");

            const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
            const totalWeight = cartItems.reduce((total, item) => total + item.weight * item.quantity, 0);
            const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

            // Формуємо остаточний текст для відправки на пошту
            const fullDetails = `
        Кількість товарів: ${totalQuantity}
        Загальна ціна: ${totalPrice} грам.
        Загальна вага: ${totalWeight} кг
        ${cartDetails}
      `;

            setCartPost(fullDetails); // Оновлюємо cartPost на основі товарів у кошику
        } else {
            setCartPost('');
        }
    }, [cartItems]);


    //formspree
    const [state, handleSubmit] = useForm("meoqwwvd");

    // Спочатку всі хуки
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState<{ name?: string; phoneNumber?: string }>({});

    // Валідація
    const validateForm = () => {
        const newErrors: { name?: string; phoneNumber?: string } = {};
        if (!name.trim()) {
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
        console.log(cartItems)
        if (validateForm()) {
            // Якщо валідація успішна, відправляємо форму через Formspree
            handleSubmit(event);
        } else {
            console.log("форма містить помилки");
        }
    };

    return (
        <>
        {state.succeeded  && <p className="text-green-900 font-bold text-xl">Дякую за замовлення ! З вами скоро зв'яжуться!</p>}
        <form
            action="https://formspree.io/f/meoqwwvd"
            method="POST"
            onSubmit={formSubmit}  // Викликаємо власну функцію при відправці
            ref={formRef}
            className="h-96 flex flex-col gap-4"
        >
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

            {/* Секретне поле для відправки товарів */}
            <input type="hidden" name="cartItems" value={cartPost} />

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
        </>
    );
};

export default ShopForm;