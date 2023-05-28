import styles from './chats-page-hello-message.module.scss';
import {Button} from "../../../../ui/Button/button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Modal} from "../../../../components/modal/modal";
import {AddNewChatForm} from "../../../add-new-chat-form";
import {useGreenApi} from "../../../../hooks/use-green-api";

export const ChatsPageHelloMessage = () => {
    const navigate = useNavigate()
    const greenApi = useGreenApi()
    const [error, setError] = useState('')
    const [createChatModalState, setCreateChatModal] = useState(false)

    const openCreateChatModal = () => setCreateChatModal(true)
    const closeCreateChatModal = () => setCreateChatModal(false)

    const handleSubmit = (phone: string) => {
        greenApi.checkPhoneWhatsAppReg(phone).then(data => {
            const {existsWhatsapp} = data
            if (existsWhatsapp) {
                setError('')
                navigate(`/chats/${phone}`)
            }
            else {
                setError('Телефон не зарегистрирован в Whatsap')
            }
        })
    }

    return (
        <div className={styles.chatsHelloMessage}>
            <p>Создайте чат чтобы отправить сообщение</p>
            <div>
                <Button onClick={openCreateChatModal}>Создать чат</Button>
            </div>
            {createChatModalState && <Modal onClose={closeCreateChatModal}><AddNewChatForm onSubmit={handleSubmit} error={error}/></Modal>}
        </div>
    );
};
