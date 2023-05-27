import styles from './start-form.module.scss';
import {ChangeEventHandler, FC, FormEventHandler, useCallback, useState} from "react";
import {Title} from "../title/title";
import {IdInstanceInput} from "../id-instance-input/id-instance-input";
import {ApiTokenInstanceInput} from "../api-token-instance-input/api-token-instance-input";
import {SubmitButton} from "../submit-button/submit-button";

interface StartFormProps {
    onSubmit: (idInstance: string, apiTokenInstance: string) => void;
    error: string;
}

export const StartForm:FC<StartFormProps> = ({onSubmit, error}) => {
    const [idInstanceValue, setIdInstanceValue] = useState<string>('')
    const [apiTokenInstanceValue, setApiTokenInstanceValue] = useState<string>('')

    const onChangeIdInstance:ChangeEventHandler<HTMLInputElement> = useCallback((event) => setIdInstanceValue(event.currentTarget.value),[])
    const onChangeApiTokenInstance:ChangeEventHandler<HTMLInputElement> = useCallback((event) => setApiTokenInstanceValue(event.currentTarget.value),[])

    const handleSubmit:FormEventHandler = (evt) => {
        evt.preventDefault()
        onSubmit(idInstanceValue, apiTokenInstanceValue)
    }

    return (
        <form className={styles.startForm} onSubmit={handleSubmit}>
            <Title className={styles.startForm__title}/>
            <IdInstanceInput className={styles.startForm__input} onChange={onChangeIdInstance} value={idInstanceValue}/>
            <ApiTokenInstanceInput className={styles.startForm__input} onChange={onChangeApiTokenInstance} value={apiTokenInstanceValue}/>
            {error && <p className={styles.startForm__errorMsg}>{error}</p>}
            <SubmitButton className={styles.startForm__submitBtn}/>
        </form>
    );
};
