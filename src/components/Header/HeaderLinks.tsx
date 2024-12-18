import HeaderLink from './HeaderLink'

interface IHeaderLinksProps {
    setCurrentSection:(section:string) => void;
}

interface IHeaderLink {
    text:string;
    href:string
    id: string;
}

//map from array header links to tsx element's
const HeaderLinks = ({setCurrentSection}:IHeaderLinksProps) => {


    //array of header nav links
    const linksArray: IHeaderLink[] = [
        {text:"Меню", href: "menu", id:"menu"},
        { text: "Готові набори", href: "sets", id:"sets"},
        {text: "Про кухара", href: "chef", id: "chef"},
        {text: "Бонуса система", href: "bonuses", id:"bonuses"},
        {text: "Акції", href: "promotions", id:"promotions"}
    ]

    return (
        <ul className="
        sm: flex
        sm:flex-1
        sm:justify-center
        sm:flex-col
        sm:items-center
        sm:gap-10
        md:flex
        md:flex-1
        md:justify-center
        md:flex-col
        md:items-center
        md:gap-10
   xl:flex
   xl:flex-1
   xl:justify-around
   xl:items-start
   xl:text-xl
   xl:gap-2
   xl:flex-wrap
  "
        >
            {linksArray.map(link => (
                <HeaderLink onClick={() => setCurrentSection(link.href)} key={link.id} text={link.text} href={link.href}/>
            ))}
        </ul>
    )
}

export default HeaderLinks;