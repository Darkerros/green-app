import {MessageType} from "./resource/chat-message-resource";

export interface GetNotificationResponse {
    receiptId: number;
    body: {
        typeWebhook: WebHookType;
        instanceData: {
            idInstance: number;
            wid: string;
            typeInstance: "whatsapp";
        },
        timestamp: string;
        idMessage: string;
        senderData: {
            chatId: string;
            sender: string;
            senderName: string;
            chatName?: string;
        },
        messageData:{
            typeMessage: MessageType,
            textMessageData: {
                textMessage:string;
            }
            extendedTextMessageData?: {
                text: string;
            }
        }
    }
}

export enum WebHookType {
    incomingMessageReceived = 'incomingMessageReceived',
    outgoingMessageReceived = 'outgoingMessageReceived',
    outgoingAPIMessageReceived = 'outgoingAPIMessageReceived',
}