import styles from './add-new-caht-form.module.scss';
import {ChangeEventHandler, FC, FormEventHandler, useState} from "react";
import {Input} from "../../../../ui/input/input";
import {SubmitButton} from "../submit-button/submit-button";

interface AddNewChatFormProps {
    onSubmit: (phone: string) => void;
    error?: string;
}

export const AddNewChatForm:FC<AddNewChatFormProps> = ({error, onSubmit}) => {
    const [phone, setPhone] = useState<string>('')

    const handlePhoneChange:ChangeEventHandler<HTMLInputElement> = (evt) => {
        const inputValue = evt.currentTarget.value.match(/\d/g)
        if (inputValue) {
            setPhone(inputValue.join(''))
        }
        else {
            setPhone('')
        }
    }

    const handleSubmit:FormEventHandler = (evt) => {
        evt.preventDefault()
        onSubmit(phone)
    }

    return (
        <form className={styles.addBewChatForm} onSubmit={handleSubmit}>
            <p className={styles.addBewChatForm__title}>Форма добавления чата</p>
            <Input extraClass={styles.addBewChatForm__input} value={phone} onChange={handlePhoneChange} placeholder={'Введите номер телефона'} type={"tel"} name={"phone"} required/>
            {error && <p className={styles.addBewChatForm__errorMsg}>{error}</p>}
            <SubmitButton className={styles.addBewChatForm__submitBtn}/>
        </form>
    );
};
