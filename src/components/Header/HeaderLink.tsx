interface HeaderLinkProps {
    text: string;
    href: string;
    onClick?: () => void;
}

const HeaderLink = ({ text, href, onClick }: HeaderLinkProps) => {

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Зупиняємо стандартне перенаправлення
        if (onClick) onClick();  // Викликаємо функцію onClick, яку передали як пропс
    };

    return (
        <li onClick={handleClick}>
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