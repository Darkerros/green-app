import styles from './chats-page.module.scss';
import {ChatsPageContent} from "../../modules/chats-page-content/components/chats-page-content/chats-page-content";

export const ChatsPage = () => {
    return (
        <section className={styles.chatsPage}>
            <div className={styles.chatsPage__content}>
                <ChatsPageContent/>
            </div>
        </section>
    );
};
