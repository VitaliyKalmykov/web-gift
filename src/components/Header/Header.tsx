import Logo from '../../images/Logo.jpg'
import HeaderNavigation from "./HeaderNavigation";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
    return (
        <header>
            {/*container of content*/}
            <div className="container flex justify-between items-center gap-5">
                {/*logo*/}
                <img className="w-24 rounded-3xl shadow-600 z-50" src={Logo} alt="Logo"/>
                {/*navigation*/}
                <HeaderNavigation/>
                {/*div of buttons contact/basket*/}
               <HeaderButtons/>
            </div>
        </header>
    );
};

export default Header;