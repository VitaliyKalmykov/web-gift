import HeaderLinks from "./HeaderLinks";

const HeaderNavigation = () => {
    return (
        //mobile first
        <nav className="
        hidden
        xl:block
        xl:flex-1
        ">
            <HeaderLinks/>
        </nav>
    );
};

export default HeaderNavigation;