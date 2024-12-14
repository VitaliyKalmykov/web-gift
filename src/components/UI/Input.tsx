import {IInputProps} from "../../typization/types";


const Input = ({
                   htmlFor,
                   classNameLabel,
                   classNameDiv,
                   classNameInput,
                   children,
                   type,
                   id,
                   placeholder,
                   name,
                   value,
                   onChange,
                   onInput
}: IInputProps) => {
    return (
        <div className={classNameDiv}>
       <label htmlFor={htmlFor} className={classNameLabel}>{children}</label>
        <input onInput={onInput} name={name} className={classNameInput} id={id} placeholder={placeholder} type={type} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;