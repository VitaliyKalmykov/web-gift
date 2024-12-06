import Jerk1 from '../../../../images/jerks1.webp'
import Jerk2 from '../../../../images/jerks2.jpg'
import Jerk3 from '../../../../images/jerks3.webp'
import FoodCard from "./FoodCard";

const Menu = () => {

    const jerksArray = [{
        image: Jerk1,
        name: 'Назва джерок',
        description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
        price: 100
    },
        {
            image: Jerk2,
            name: 'Назва джерок',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 150
        },
        {
            image: Jerk3,
            name: 'Назва джерок',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 200
        },
        {
            image: Jerk3,
            name: 'Назва джерок',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 250
        }
,
        {
            image: Jerk3,
            name: 'Назва джерок',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 300
        }
,
        {
            image: Jerk3,
            name: 'Назва джерок',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 350
        }
    ]

    return (
        <section>
            <div className="container flex justify-between gap-2 relative">
                <div className="border-2 p-2"><p>text sidebar some filter</p>
                    <p>text sidebar some filter</p>
                    <p>text sidebar some filter</p>
                    <p>text sidebar some filter</p>
                    <p>text sidebar some filter</p>
                    <p>text sidebar some filter</p>
                    <p>text sidebar some filter</p></div>
                <div className="flex-1 border-2">
                    <div className="grid grid-cols-3 gap-5">
                        {jerksArray.map(((jerk, index) => (
                            <FoodCard key={index} image={jerk.image} name={jerk.name} description={jerk.description} price={jerk.price} />
                        )))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;