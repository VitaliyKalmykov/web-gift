interface HeaderLinkProps {
    text: string;
    href: string;
}

const HeaderLink = ({ text, href }: HeaderLinkProps) => {
    return (
        <li>
            <a className="
            font-semibold
            text-color-primary
            hover:text-color-secondary
            relative
            link"
               href={href}>{text}</a>
        </li>
    );
};

export default HeaderLink;