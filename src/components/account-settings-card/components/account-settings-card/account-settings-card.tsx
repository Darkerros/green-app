import styles from './accounts-settings-card.module.scss';
import {GetAccountSettings} from "../../../../api/types/get-account-settings";
import {FC} from "react";
import {AccountSettingsCardItem} from "../account-settings-card-item/account-settings-card-item";

interface AccountSettingsCardProps {
    accountSettings: GetAccountSettings;
}

export const AccountSettingsCard:FC<AccountSettingsCardProps> = ({accountSettings}) => {
    return (
        <div className={styles.accountSettingsCard}>
            <AccountSettingsCardItem title={'Идентификатор аккаунта WA:'} text={accountSettings.wid}/>
            <AccountSettingsCardItem title={'Задержка отправки сообщений:'} text={accountSettings.delaySendMessagesMilliseconds}/>
            <AccountSettingsCardItem title={'Отмечать входящие прочитанными:'} text={accountSettings.markIncomingMessagesReaded}/>
            <AccountSettingsCardItem title={'Получать уведомления о входящих сообщениях:'} text={accountSettings.incomingWebhook}/>
        </div>
    );
};
