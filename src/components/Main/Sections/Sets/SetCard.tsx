import Button from "../../../UI/Button";

interface ISetCardProps {
    imageSrc: string;
    altText: string;
    defaultText: string;
    price: string;
    hoverContent: React.ReactNode;
}

const setCard = ({imageSrc, altText, defaultText, hoverContent, price}:ISetCardProps) => {
    return (
        <div className="w-full rounded-xl overflow-hidden relative group">
            <img className="w-full h-full" src={imageSrc} alt={altText}/>
            {/* текст, який зникає при ховері */}
            <div className="absolute inset-0 flex items-center justify-center text-xl group-hover:hidden">
                <h3 className="font-bold border-2 bg-white rounded-xl p-2">{defaultText}</h3>
            </div>
            {/* Затінений фон */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-black transition-all duration-300"></div>
            {/* контент, який з'являється при ховері */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:flex flex-col items-center justify-center space-y-4 text-white transition-all duration-300">
                {hoverContent}
                Ціна - {price}грн.
                <Button className="block px-4 py-2 border-2 bg-green-500 rounded-lg hover:bg-green-600">До кошика</Button>
            </div>
        </div>
    );
}

export default setCard;