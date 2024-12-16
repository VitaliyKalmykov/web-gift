import HeaderLinks from "./HeaderLinks";
import HeaderSideBar from "./HeaderSideBar";

const HeaderNavigation = () => {

    return (
        <>
            <HeaderSideBar/>
            <nav className="
        hidden
        xl:block
        xl:flex-1
        ">
                <HeaderLinks/>
            </nav>
        </>
    );
};

export default HeaderNavigation;