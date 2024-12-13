import {IButtonProps} from "../../typization/types";

const Button = ({type, className, children, onClick, onSubmit}:IButtonProps) => {
    return (
       <button className={`${className} button`} type={type} onClick={onClick} onSubmit={onSubmit}>{children}</button>
    );
};

export default Button;