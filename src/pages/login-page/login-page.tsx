import styles from './login-page.module.scss';
import {StartForm} from "../../modules/start-form";
import {useState} from "react";
import {GreenApi} from "../../api/green-api";
import {useNavigate} from "react-router-dom";
import {ApiStateInstance} from "../../api/types/check-api-instance-response";

export const LoginPage = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSubmit = (idInstance: string, apiTokenInstance: string) => {
        GreenApi.checkGreenApiInstance(idInstance, apiTokenInstance)
            .then(data => {
                const {stateInstance} = data
                if (stateInstance === ApiStateInstance.authorized) {
                    setError('')
                    localStorage.setItem('idInstance', idInstance)
                    localStorage.setItem('apiTokenInstance', apiTokenInstance)
                    navigate('/chats')
                }
                setError(`Текущий статус аккаунта: ${stateInstance}`)
            }).catch(() => {
                setError('Проверьте правильность введенных данных')
            })
    }

    return (
        <section className={styles.loginPage}>
            <StartForm onSubmit={handleSubmit} error={error}/>
        </section>
    );
};
