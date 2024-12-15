//react tools import
import  {useState, useEffect} from "react";

//pic's import
import Jerk1 from '../../../../images/jerks1.webp'
import Jerk2 from '../../../../images/jerks1.webp'
import Jerk3 from '../../../../images/jerks3.webp'

//components import
import FoodCard from "./FoodCard";
import FoodModal from "./FoodModal/FoodModal";

//int import
import {IJerk} from "../../../../typization/types";


const Menu = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJerk, setSelectedJerk] = useState<IJerk | null>(null);

    //носкролл якщо модалка відкрита
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // При відкритті модалки прибираємо скролл
        } else {
            document.body.style.overflow = "auto"; // При закритті модалки повертаємо скролл
        }
    }, [isModalOpen]);

    //обробник обранної джерки для модалки
    const chooseJerk = (jerk: IJerk) => {
        setSelectedJerk(jerk);
        setIsModalOpen(true);
    };

    //закриваєм модалку та скидуємо стан обраної джерки
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJerk(null)
    };


  //арей об'єктів джерок
    const jerksArray: IJerk[] = [
        {
            id: "1",
        image: Jerk1,
        name: 'Джерка1',
        description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
        price: 150,
        weight: 100
    },
        {
            id: "2",
            image: Jerk2,
            name: 'Джерка2',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 150,
            weight: 100
        },
        {
            id:"3",
            image: Jerk3,
            name: 'Джерка3',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 250,
            weight: 200
        },
        {
            id:"4",
            image: Jerk3,
            name: 'Джерка4',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 250,
            weight: 200
        },
        {
            id:"5",
            image: Jerk3,
            name: 'Джерка5',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 300,
            weight: 250
        },
        {
            id:"6",
            image: Jerk3,
            name: 'Джерка6',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 350,
            weight: 300
        }
    ]

    return (
        <section className="container relative">
            <div className="
             grid grid-cols-1 gap-2
             sm:gap-4
             md:grid-cols-2 md:gap-3
             xl:grid-cols-3 xl:gap-5
            ">

                {/*маплю арей в реакт компонент картку джерки*/}
                {jerksArray.map(((jerk, index) => (
                    <FoodCard key={index}
                              id={jerk.id}
                              image={jerk.image}
                              name={jerk.name}
                              description={jerk.description}
                              price={jerk.price}
                              weight={jerk.weight}
                              openProductModal={() => chooseJerk(jerk)}
                    />)))}

            </div>

            {/*модалка*/}
            {isModalOpen && (<FoodModal
                selectedJerk={selectedJerk}
                closeModal={closeModal}
            />)}

        </section>
    );
};

export default Menu;