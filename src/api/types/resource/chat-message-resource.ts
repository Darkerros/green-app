export interface ChatMessageResource {
    type: MessageSendType;
    timestamp: string;
    idMessage: string;
    typeMessage: MessageType;
    chatId: string;
    senderId?: string;
    senderName?: string;
    textMessage: string;
}

export enum MessageSendType {
    incoming = 'incoming',
    outgoing = 'outgoing'
}

export enum MessageType {
    textMessage = 'textMessage',
    imageMessage = 'imageMessage',
    videoMessage = 'videoMessage',
    documentMessage = 'documentMessage',
    audioMessage = 'audioMessage',
    locationMessage = 'locationMessage',
    contactMessage = 'contactMessage',
    extendedTextMessage = 'extendedTextMessage'
}