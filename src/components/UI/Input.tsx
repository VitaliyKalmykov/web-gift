import {IInputProps} from "../../typization/types";


const Input = ({htmlFor,
                   classNameLabel,
                   classNameDiv,
                   classNameInput,
                   children,
                   type,
                   id,
                   placeholder,
               name
}: IInputProps) => {
    return (
        <div className={classNameDiv}>
       <label htmlFor={htmlFor} className={classNameLabel}>{children}</label>
        <input name={name} className={classNameInput} id={id} placeholder={placeholder} type={type} />
        </div>
    );
};

export default Input;