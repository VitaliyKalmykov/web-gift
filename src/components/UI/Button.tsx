import {IButtonProps} from "../../typization/types";

const Button = ({type, className, children, onClick}:IButtonProps) => {
    return (
       <button className={`${className} button`} type={type} onClick={onClick}>{children}</button>
    );
};

export default Button;