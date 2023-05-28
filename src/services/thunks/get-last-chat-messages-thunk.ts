import {createAsyncThunk} from "@reduxjs/toolkit";
import {GreenApi} from "../../api/green-api";

export const getLastChatMessagesThunk = createAsyncThunk('getLastMessages',
    (phone: string) => {
        const idInstance = localStorage.getItem('idInstance') || ''
        const apiTokenInstance = localStorage.getItem('apiTokenInstance') || ''
        const greenApi = new GreenApi(idInstance,apiTokenInstance)
        return greenApi.getChatLastMessages(phone)
    }
)