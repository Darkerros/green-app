import {FC} from 'react';
import styles from './account-settings-card-item.module.scss'

interface AccountSettingsCardItemProps {
    title: string;
    text: string | number;
}

export const AccountSettingsCardItem:FC<AccountSettingsCardItemProps> = ({title, text}) => {
    return (
        <div className={styles.accountSettingsCardItem}>
            <p className={styles.accountSettingsCardItem__title}>{title}</p>
            <p className={styles.accountSettingsCardItem__text}>{text}</p>
        </div>
    );
};
