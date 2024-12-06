interface IFoodCard {
    image: string;
    name: string;
    description: string;
    price: number;
}


const FoodCard = ({image, name, description, price}: IFoodCard) => {
    return (
        <article className="border-2 p-2 rounded-xl shadow-xl">
            <ul className="flex flex-col justify-center items-center gap-2">
                <li className="flex justify-center items-center"><img className="w-48" src={image} alt={name}/></li>
                <li><h3>{name}</h3></li>
                <li>{description}</li>
                <li className="mb-2">{price} грн.</li>
            </ul>
            <button type={"button"} className="block mx-auto border-2 p-2 rounded-lg">До столу</button>
        </article>
    );
};

export default FoodCard;