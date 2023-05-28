import styles from './chat-message-list.module.scss';
import {MessageCard} from "../../../../components/message-card/message-card";
import {useAppSelector} from "../../../../hooks/use-app-selector";

export const ChatMessageList = () => {
    const messages = useAppSelector(state => state.chatReducer.messages)

    return (
        <div className={styles.chatMessageList}>
            {messages.map(message => <MessageCard message={message}/>)}
        </div>
    );
};
