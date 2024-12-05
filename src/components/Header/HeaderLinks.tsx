import HeaderLink from './HeaderLink';

interface Link {
    text:string;
    href:string
    id: string;
}

//array of header nav links
const linksArray: Link[] = [{text:"Меню", href: "menu", id:"menu"},
    { text: "Готові набори", href: "sets", id:"sets"},
    {text: "Про кухара", href: "chef", id: "chef"},
    {text: "Бонуси", href: "bonuses", id:"bonuses"},
    {text: "Акції", href: "promotions", id:"promotions"}
]

//map from array header links to tsx element's
const HeaderLinks = () => {
    return (
        <ul className="flex justify-center items-center flex-1 gap-10 text-xl">
            {linksArray.map(link => (
            <HeaderLink key={link.id} text={link.text} href={link.href} />
            ))}
        </ul>
    )
}

export default HeaderLinks;