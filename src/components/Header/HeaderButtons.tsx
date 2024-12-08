import SymbolDefs from "../../assets/SymbolDefs";

const HeaderButtons = () => {

    return (
        <div className="flex gap-10 items-center">
            {/*svg buttons*/}

            {/*basket icon*/}
            <button>
                <SymbolDefs className="w-14
                            header__svg-fill-primary
                            hover:header__svg-fill-secondary
                            transition duration-300 ease-in-out
                            hover:scale-125"
                            name={"basket"}/>
            </button>

            {/*phone icon*/}

            <button type="button">
                <SymbolDefs
                    className="w-16
                            header__svg-fill-primary
                            hover:header__svg-fill-secondary
                            transition duration-300 ease-in-out
                            hover:scale-125"
                    name={"phone"}
                />
            </button>
        </div>
    );
};

export default HeaderButtons;