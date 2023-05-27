import styles from './add-new-caht-form.module.scss';
import {ChangeEventHandler, FC, FormEventHandler, KeyboardEventHandler, useState} from "react";
import {Input} from "../../../../ui/input/input";
import {SubmitButton} from "../submit-button/submit-button";

interface AddNewChatFormProps {
    onSubmit: (phone: string) => void;
    error?: string;
}

export const AddNewChatForm:FC<AddNewChatFormProps> = ({error, onSubmit}) => {
    const [phone, setPhone] = useState<string>('')

    const handlePhoneChange:ChangeEventHandler<HTMLInputElement> = (evt) => {
        const inputValue = evt.currentTarget.value
        setPhone(inputValue)
    }
    const handlePhoneInputKeyPress:KeyboardEventHandler<HTMLInputElement> = (evt) => {
        const parseNumberValue = Number.parseInt(evt.key)
        const isBackspaceClick = evt.key === 'Backspace'
        const isTabClick = evt.key === 'Tab'

        if (isBackspaceClick ||  isTabClick)
            return

        if (!parseNumberValue)
            evt.preventDefault()
    }

    const handleSubmit:FormEventHandler = (evt) => {
        evt.preventDefault()
        onSubmit(phone)
    }

    return (
        <form className={styles.addBewChatForm} onSubmit={handleSubmit}>
            <p className={styles.addBewChatForm__title}>Форма добавления чата</p>
            <Input extraClass={styles.addBewChatForm__input} value={phone} onKeyDown={handlePhoneInputKeyPress} onChange={handlePhoneChange} placeholder={'Введите номер телефона'} type={"tel"} name={"phone"} required/>
            {error && <p className={styles.addBewChatForm__errorMsg}>{error}</p>}
            <SubmitButton className={styles.addBewChatForm__submitBtn}/>
        </form>
    );
};
