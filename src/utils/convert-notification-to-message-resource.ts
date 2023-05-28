import {ChatMessageResource, MessageSendType, MessageType} from "../api/types/resource/chat-message-resource";
import {GetNotificationResponse, WebHookType} from "../api/types/get-notification-response";

export const convertNotificationToMessageResource = (notification: (GetNotificationResponse | null)): (ChatMessageResource | null) => {
    if (!notification) return null
    const isOutgoingMessage = notification.body.typeWebhook === WebHookType.outgoingMessageReceived || notification.body.typeWebhook === WebHookType.outgoingAPIMessageReceived

    if (notification.body?.messageData?.typeMessage === MessageType.textMessage) {
        const messageType = isOutgoingMessage ? MessageSendType.outgoing : MessageSendType.incoming
        return {
            type: messageType,
            senderName: notification.body.senderData.senderName,
            senderId: notification.body.senderData.sender,
            chatId: notification.body.senderData.chatId,
            idMessage: notification.body.idMessage,
            typeMessage: MessageType.textMessage,
            timestamp: notification.body.timestamp,
            textMessage: notification.body.messageData.textMessageData.textMessage
        }
    }

    if (notification.body?.messageData?.typeMessage === MessageType.extendedTextMessage && notification.body.messageData.extendedTextMessageData?.text) {
        const messageType = isOutgoingMessage ? MessageSendType.outgoing : MessageSendType.incoming
        return {
            type: messageType,
            senderName: notification.body.senderData.senderName,
            senderId: notification.body.senderData.sender,
            chatId: notification.body.senderData.chatId,
            idMessage: notification.body.idMessage,
            typeMessage: MessageType.textMessage,
            timestamp: notification.body.timestamp,
            textMessage: notification.body.messageData.extendedTextMessageData?.text
        }
    }

    return null
}