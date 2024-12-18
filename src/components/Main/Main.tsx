import { useState, useEffect } from "react";
import Menu from "./Sections/Menu/Menu";
import Sets from "./Sections/Sets/Sets";

interface IMainProps {
    currentSection: string;
}

const Main = ({ currentSection }: IMainProps) => {
    const [visibleSection, setVisibleSection] = useState<string>("");
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    // Використовуємо useEffect для зміни видимості секції з анімацією
    useEffect(() => {
        // Починаємо перехід
        setIsTransitioning(true);

        // Затримка, щоб дочекатися анімації
        setTimeout(() => {
            setVisibleSection(currentSection);
            setIsTransitioning(false);
        }, 300); // Це має бути час, рівний тривалості анімації
    }, [currentSection]);

    const renderSections = () => {
        switch (visibleSection) {
            case "menu":
                return (
                    <div
                        className={`transition-opacity duration-500 ease-in-out ${
                            !isTransitioning ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Menu />
                    </div>
                );
            case "sets":
                return (
                    <div
                        className={`transition-opacity duration-500 ease-in-out ${
                            !isTransitioning ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Sets />
                    </div>
                );
            default:
                return <div>Секція не знайдена</div>;
        }
    };

    return <main>{renderSections()}</main>;
};

export default Main;