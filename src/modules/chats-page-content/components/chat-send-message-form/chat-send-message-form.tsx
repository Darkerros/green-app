import {FormEventHandler, useState} from 'react';
import styles from "../chats-page-chat/chats-page-chat.module.scss";
import {Input} from "../../../../ui/input/input";
import {Button} from "../../../../ui/Button/button";
import {useGreenApi} from "../../../../hooks/use-green-api";
import {useParams} from "react-router-dom";

export const ChatSendMessageForm = () => {
    const greenApi = useGreenApi()
    const {id} = useParams<{ id: string }>()
    const [message, setMessage] = useState<string>('')

    const handleSubmit:FormEventHandler = (evt) => {
        evt.preventDefault()
        if (id && message) {
            greenApi.sendMessage(id, message)
            setMessage('')
        }
    }

    return (
        <form className={styles.chatsPageChat__messageSendForm} onSubmit={handleSubmit}>
            <Input value={message} onChange={evt => setMessage(evt.currentTarget.value)} extraClass={styles.chatsPageChat__messageInput} placeholder={'Введите текст для отправки...'}/>
            <Button type={"submit"} >Отправить</Button>
        </form>
    );
};
