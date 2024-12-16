import {useState, useEffect} from "react";
import Button from "../UI/Button";
import SymbolDefs from "../../assets/SymbolDefs";
import HeaderLinks from "./HeaderLinks";


const HeaderSideBar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Оновлюємо висоту вікна
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = "hidden";  // Вимикає скролл
        } else {
            document.body.style.overflow = "auto";   // Включає скролл
        }

        return () => {
            document.body.style.overflow = "auto";   // Відновлює скролл при розмонтуванні компонента
        };
    }, [isSidebarOpen]);

    return (
        <nav
            className={`
        flex flex-col gap-10 justify-start items-center
        bg-none 
        z-40
        xl:hidden
    `}
        >
            {/* Кнопка відкриття сайдбару */}
            <Button
                onClick={toggleSidebar}
                className="p-2 rounded z-50"
            >
                <SymbolDefs
                    name="arrow"
                    className={`
                        w-10
                        header__svg-fill-primary
                        hover:header__svg-fill-secondary
                        transition duration-300 ease-in-out hover:scale-110
                        ${isSidebarOpen ? 'rotate-180' : ''}
        `}
                />
            </Button>

            {/* Контейнер з посиланнями, який приховується/відображається */}
            <div  className={`
        fixed top-0 left-0 w-full
        ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"}
        transition-transform duration-500 ease-in-out
        bg-white flex flex-col pt-16`
            } style={{ height: `${windowHeight}px` }}  // Встановлюємо висоту за допомогою JavaScript
            >
                <HeaderLinks/>
            </div>
        </nav>
    );
};

export default HeaderSideBar;