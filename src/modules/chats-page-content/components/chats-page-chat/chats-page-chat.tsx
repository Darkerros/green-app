import styles from './chats-page-chat.module.scss';
import {useParams} from "react-router-dom";
import {ChatSendMessageForm} from "../chat-send-message-form/chat-send-message-form";
import {useEffect} from "react";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {getLastChatMessagesThunk} from "../../../../services/thunks/get-last-chat-messages-thunk";
import {ChatMessageList} from "../chat-message-list/chat-message-list";
import {checkChatMessageUpdateThunk} from "../../../../services/thunks/check-chat-message-update-thunk";

export const ChatsPageChat = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams<{id: string}>()

    useEffect(() => {
        if (id) {
            dispatch(getLastChatMessagesThunk(id))
        }
        dispatch(checkChatMessageUpdateThunk())
        // eslint-disable-next-line
    },[])

    return (
        <div className={styles.chatsPageChat}>
            <ChatMessageList/>
            <ChatSendMessageForm/>
        </div>
    );
};
