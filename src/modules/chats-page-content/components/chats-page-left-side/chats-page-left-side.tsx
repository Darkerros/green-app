import styles from './chats-page-left-side.module.scss';
import {useEffect} from "react";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {getAccountSettingsThunk} from "../../../../services/thunks/get-account-settings-thunk";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {
    AccountSettingsCard
} from "../../../../components/account-settings-card/components/account-settings-card/account-settings-card";

export const ChatsPageLeftSide = () => {
    const dispatch = useAppDispatch()
    const accountSettings = useAppSelector(state => state.accountSettingsReducer.settings)

    useEffect(() => {
        dispatch(getAccountSettingsThunk())
        // eslint-disable-next-line
    },[])

    return (
        <div className={styles.chatsPageLeftSide}>
            <h2 style={{textAlign: "center"}}>Настройки аккаунта</h2>
            {accountSettings && <AccountSettingsCard accountSettings={accountSettings}/>}
        </div>
    );
};
