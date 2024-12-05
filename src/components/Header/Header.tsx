import SymbolDefs from "../../assets/SymbolDefs";
import HeaderLinks from "./HeaderLinks";
import Logo from '../../images/Logo.jpg'

const Header = () => {
    return (
        <header className="header-gradient">
            <div
                //container of content
                className="container flex justify-between items-center gap-5">
                {/*logo*/}
                <img className="w-24 rounded-xl shadow-600" src={Logo} alt="Logo"/>
                {/*navigation*/}
                <nav>
                    <HeaderLinks/>
                </nav>
                {/*div of buttons contact/basket*/}
                <div className="flex gap-10">
                    {/*svg buttons*/}
                    <button type="button">
                        <SymbolDefs className={"fill-blue-400 w-14 svgfill"} name={"basket"}/>
                    </button>
                    <button type="button">
                        <SymbolDefs className={"fill-blue-400 w-14 svgfill"} name={"phone"}/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;