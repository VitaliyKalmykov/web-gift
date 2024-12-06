import  {useState, useEffect} from "react";
import Jerk1 from '../../../../images/jerks1.webp'
import Jerk2 from '../../../../images/jerks2.jpg'
import Jerk3 from '../../../../images/jerks3.webp'
import FoodCard from "./FoodCard";

const Menu = () => {

    // Інтерфейс для об'єктів
    interface IJerk {
        image: string; // Шлях до зображення
        name: string; // Назва джерки
        description: string; // Опис джерки
        price: number; // Ціна джерки
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJerk, setSelectedJerk] = useState<IJerk | null>(null);

    //обробник обранної джерки для модалки
    const handleButtonClick = (jerk: IJerk) => {
        setSelectedJerk(jerk);
        setIsModalOpen(true);
    };

    //закриваєм модалку та скидуємо стан обраної джерки
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJerk(null)
    };

    //носкролл якщо модалка відкрита
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // При відкритті модалки прибираємо скролл
        } else {
            document.body.style.overflow = "auto"; // При закритті модалки повертаємо скролл
        }
    }, [isModalOpen]);

    const jerksArray: IJerk[] = [{
        image: Jerk1,
        name: 'Джерка1',
        description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
        price: 100
    },
        {
            image: Jerk2,
            name: 'Джерка2',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 150
        },
        {
            image: Jerk3,
            name: 'Джерка3',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 200
        },
        {
            image: Jerk3,
            name: 'Джерка4',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 250
        }
,
        {
            image: Jerk3,
            name: 'Джерка5',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 300
        }
,
        {
            image: Jerk3,
            name: 'Джерка6',
            description: 'Ці джерки підкреслюють вкус (вкус джерок) котрий ідеально пасує з (додати щось). Ідеальний вибір для (додати щось)',
            price: 350
        }
    ]

    return (
        <section>
            <div className="container flex justify-between gap-2 relative">
                <div className="flex-1 border-2">
                    <div className="grid grid-cols-3 gap-5">
                        {jerksArray.map(((jerk, index) => (
                            <FoodCard key={index}
                                      image={jerk.image}
                                      name={jerk.name}
                                      description={jerk.description}
                                      price={jerk.price}
                                      onButtonClick={() => handleButtonClick(jerk)}
                            />
                        )))}
                    </div>
                </div>



                {/*модалка*/}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                         onClick={closeModal}
                    >
                        <div className="bg-white p-5 rounded-xl shadow-lg" onClick={(e )=> e.stopPropagation()}>
                            <h2 className="text-lg font-bold">{selectedJerk?.name}</h2>
                            <p>{selectedJerk?.description}</p>
                            <p className="mt-2 font-bold">{selectedJerk?.price} грн.</p>
                            <button
                                className="mt-4 p-2 bg-red-500 text-white rounded-lg"
                                onClick={closeModal}
                            >
                                Закрити
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </section>
    );
};

export default Menu;