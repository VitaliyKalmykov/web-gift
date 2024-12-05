interface HeaderLinkProps {
    text: string;
    href: string;
}

const HeaderLink = ({ text, href }: HeaderLinkProps) => {
    return (
        <li>
            <a className="font-bold" href={href}>{text}</a>
        </li>
    );
};

export default HeaderLink;