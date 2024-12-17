import SymbolDefs from "../../assets/SymbolDefs";

const Footer = () => {
    // Масив з соцмережами
    const socialMedia: { name: 'instagram' | 'telegram' | 'tiktok' | 'twitter'; label: string; link: string }[] = [
        { name: "instagram", label: "Instagram", link:"https://www.instagram.com/zaiets_vladyslav/" },
        { name: "telegram", label: "Telegram", link: "https://t.me/+onpIufOBCr01YjZi"},
        { name: "tiktok", label: "TikTok", link: "https://www.tiktok.com/@zaiets.vladyslav?_t=8sI7QDy6Dn3"},
        { name: "twitter", label: "X", link: "https://x.com/elonmusk"},
    ];

    return (
        <footer className="border-2 p-4">
            <h2 className="text-center font-bold mb-4">
                Приєднуйся до моїх соціальних мереж та спостерігай за готуванням моїх продуктів!
            </h2>
            <div
                className="flex justify-center items-center gap-4
                sm:gap-8 md:gap-10 xl:gap-40"
            >
                {socialMedia.map(({ name, label, link }) => (
                    <div key={name} className="text-center">
                        <h3>{label}</h3>
                       <a href={link} target="_blank" rel="noopener noreferrer">
                           <SymbolDefs
                               className="fill-white cursor-pointer transition-all ease-in hover:scale-110 hover:fill-black
                            sm:w-12
                            md:w-12
                            xl:w-16
                            "
                               name={name}
                           />
                       </a>
                    </div>
                ))}
            </div>
            <p className="text-center mt-4">
                Цей пет-проект зроблений для мого гарного друга Влада. 2024 (с).
            </p>
        </footer>
    );
};

export default Footer;