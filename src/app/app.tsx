import {ChatsPage} from "../pages/chats-page/chats-page";
import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {LoginPage} from "../pages/login-page/login-page";
import {
    ChatsPageHelloMessage
} from "../modules/chats-page-content/components/chats-page-hello-message/chats-page-hello-message";
import {ChatsPageChat} from "../modules/chats-page-content/components/chats-page-chat/chats-page-chat";
import {useGreenApi} from "../hooks/use-green-api";
import {ApiStateInstance} from "../api/types/check-api-instance-response";


function App() {
    const greenApi = useGreenApi();
    const navigate = useNavigate()

    useEffect(() => {
        greenApi.checkGreenApiInstance()
            .then(data => {
                if (data.stateInstance === ApiStateInstance.authorized) {
                    navigate('/chats')
                    return
                }
                navigate('/login')
            })
            .catch(() => {
                navigate('/login')
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Routes>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/chats'} element={<ChatsPage/>}>
                    <Route index element={<ChatsPageHelloMessage/>}/>
                    <Route path={':id'} element={<ChatsPageChat/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
