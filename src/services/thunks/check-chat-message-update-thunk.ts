import {createAsyncThunk} from "@reduxjs/toolkit";
import {GreenApi} from "../../api/green-api";

export const checkChatMessageUpdateThunk = createAsyncThunk('checkChatMessageThunk',
    async (data,{dispatch}) => {
        const idInstance = localStorage.getItem('idInstance') || ''
        const apiTokenInstance = localStorage.getItem('apiTokenInstance') || ''
        const greenApi = new GreenApi(idInstance,apiTokenInstance)
        const notification = await greenApi.getNotification()
        if (notification) {
            await greenApi.removeNotification(notification.receiptId).catch(err => console.log(err))
        }
        setTimeout(() => dispatch(checkChatMessageUpdateThunk()),2000)
        return notification
    })