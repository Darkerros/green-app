import {FC, memo} from 'react';
import styles from './message-card.module.scss'
import {ChatMessageResource, MessageSendType} from "../../api/types/resource/chat-message-resource";
import clsx from "clsx";

interface MessageCardProps {
    message: ChatMessageResource;
}

export const MessageCard:FC<MessageCardProps> = memo(({message}) => {
    const className = clsx({
        [styles.messageCard]: true,
        [styles.messageCard_type_incoming]: message.type === MessageSendType.incoming,
    })

    return (
        <div className={className}>
            {message.senderName && <p className={styles.messageCard__sender}>{message.senderName}:</p>}
            <p className={styles.messageCard__text}>{message.textMessage}</p>
        </div>
    );
});
