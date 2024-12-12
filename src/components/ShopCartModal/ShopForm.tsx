import Input from "../UI/Input";

interface IShopFormProps {
    setIsDelivery: (isDelivery: boolean) => void;
}

const ShopForm = ({setIsDelivery}: IShopFormProps) => {

    return (
        <form className="h-96 flex flex-col gap-4">
            <Input
                htmlFor="name"
                classNameLabel="block text-gray-700 font-bold mb-2"
                classNameInput="block w-full border-2 border-blue-100 p-2 mb-4"
                type="text"
                id="name"
                placeholder="Ваше ім&#39;я"
                name="Name"
            >
                Ваше ім&#39;я*
            </Input>


            <Input
                htmlFor="phoneNumber"
                classNameLabel="block text-gray-700 font-bold mb-2"
                classNameInput="block w-full border-2 border-blue-100 p-2 mb-4"
                type="text"
                id="phoneNumber"
                placeholder="+380...."
                name="Phone Number"
            >
                Ваш телефон*
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
                /> Доставка на дім(+100грн до замовленя)
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