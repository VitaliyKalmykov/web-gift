import HeaderLinks from "./HeaderLinks";
import HeaderSideBar from "./HeaderSideBar";

interface IHeaderNavigationProps {
    setCurrentSection: (section: string) => void;
}

const HeaderNavigation = ({setCurrentSection}:IHeaderNavigationProps) => {

    return (
        <>
            <HeaderSideBar/>
            <nav className="
        hidden
        xl:block
        xl:flex-1
        ">
                <HeaderLinks setCurrentSection={setCurrentSection}/>
            </nav>
        </>
    );
};

export default HeaderNavigation;