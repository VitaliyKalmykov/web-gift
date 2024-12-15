import {IFoodCard} from "../../../../typization/types";
import Button from "../../../UI/Button";

const FoodCard = ({image, name, description, price, weight, openProductModal}: IFoodCard) => {
    return (
        <article className="
        border-transparent background-secondary rounded-xl shadow-xl
        sm:p-6
        md:p-4
        xl:p-2
        ">
            <ul className="flex flex-col justify-center items-center gap-2">
                <li className="flex justify-center items-center">
                    <img className="
                    sm:w-18
                    md: w-48
                    xl:w-48" src={image} alt={name}/>
                </li>
                <li>
                    <h3>{name}</h3>
                </li>
                <li>
                    {description}
                </li>
                <li className="mb-2">
                    {price}грн./{weight} грам
                </li>
            </ul>

            <Button type={"button"}
                    className="block mx-auto border-2 p-2 rounded-lg"
                    onClick={openProductModal}>
                До столу
            </Button>


        </article>
    );
};

export default FoodCard;