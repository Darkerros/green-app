import styles from './chats-page-right-side.module.scss';
import {Outlet} from "react-router-dom";

export const ChatsPageRightSide = () => {
    return (
        <div className={styles.chatsPageRightSide}>
            <Outlet/>
        </div>
    );
};
