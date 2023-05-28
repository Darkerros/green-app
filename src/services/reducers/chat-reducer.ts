import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatMessageResource} from "../../api/types/resource/chat-message-resource";
import {getLastChatMessagesThunk} from "../thunks/get-last-chat-messages-thunk";
import {checkChatMessageUpdateThunk} from "../thunks/check-chat-message-update-thunk";
import {GetNotificationResponse} from "../../api/types/get-notification-response";
import {convertNotificationToMessageResource} from "../../utils/convert-notification-to-message-resource";

interface ChatReducerState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string | null;
    messages: ChatMessageResource[];
    messagesIdObject: Record<string, string>
}

const chatReducerState: ChatReducerState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    errorMessage: null,
    messages: [],
    messagesIdObject: {},
}

const chatSlice = createSlice({
    name: 'ChatSlice',
    initialState: chatReducerState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getLastChatMessagesThunk.pending, (state) => {
                state.isSuccess = false;
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = null;
                state.messages = []
            })
            .addCase(getLastChatMessagesThunk.fulfilled, (state, action:PayloadAction<ChatMessageResource[]>) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.messages = action.payload.reverse()
                state.messagesIdObject = action.payload.reduce((acc:Record<string, string>,message) => {
                    acc[message.idMessage] = message.idMessage;
                    return acc
                }, {})
            })
            .addCase(getLastChatMessagesThunk.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.errorMessage = String(action.payload)
            })
            .addCase(checkChatMessageUpdateThunk.fulfilled, (state, action:PayloadAction<null | GetNotificationResponse>) => {
                const message = convertNotificationToMessageResource(action.payload)

                if (!message) return state

                if (!state.messagesIdObject[message.idMessage])
                    state.messages.push(message)
                    state.messagesIdObject[message.idMessage] = message.idMessage
                    return state
            })
    }
})

export const chatReducer = chatSlice.reducer;
export const chatActions = chatSlice.actions;