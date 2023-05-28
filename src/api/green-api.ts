import axios, {AxiosInstance} from "axios";
import {GetAccountSettings} from "./types/get-account-settings";
import {CheckPhoneWhatsapPhoneReg} from "./types/check-phone-whatsap-phone-reg";
import {SendMessageResponse} from "./types/send-message-response";
import {GetChatMessagesResponse} from "./types/get-chat-messages-response";
import {CheckApiInstanceResponse} from "./types/check-api-instance-response";
import {GetNotificationResponse} from "./types/get-notification-response";


enum ApiAction {
    checkApiInstance = 'getStateInstance',
    sendMessage = 'sendMessage',
    getChatMessages = 'getChatHistory',
    checkPhoneReg = 'checkWhatsapp',
    getSettings = 'getSettings',
    receiveNotification = 'receiveNotification',
    deleteNotification = 'deleteNotification',
}

enum Methods {
    GET = "GET",
    POST = "POST",
    DELETE = 'DELETE'
}

export class GreenApi {
    private idInstance: string;
    private apiTokenInstance: string;
    private baseUrl: string;
    private apiInstance: AxiosInstance;

    constructor(idInstance: string, apiTokenInstance: string) {
        this.idInstance = idInstance;
        this.apiTokenInstance = apiTokenInstance;
        this.baseUrl = 'https://api.green-api.com/';
        this.apiInstance = axios.create({
            baseURL: this.baseUrl,
            withCredentials: false,
        })
    }

    static checkGreenApiInstance = (idInstance: string, apiTokenInstance: string):Promise<CheckApiInstanceResponse> => {
        return axios.get(`https://api.green-api.com/waInstance${idInstance}/${ApiAction.checkApiInstance}/${apiTokenInstance}`).then(data => data.data)
    }

    createReguest = (apiAction: ApiAction, method: Methods, data?: any, endpoindAdditional: string = '') => {
        switch (method) {
            case Methods.GET:
                return this.apiInstance.get(`/waInstance${this.idInstance}/${apiAction}/${this.apiTokenInstance}`+endpoindAdditional).then(data => data.data)

            case Methods.DELETE:
                return this.apiInstance.delete(`/waInstance${this.idInstance}/${apiAction}/${this.apiTokenInstance}`+endpoindAdditional).then(data => data.data)

            case Methods.POST:
                return this.apiInstance.post(`/waInstance${this.idInstance}/${apiAction}/${this.apiTokenInstance}`+endpoindAdditional,data).then(data => data.data)

            default:
                return this.apiInstance.get(`/waInstance${this.idInstance}/${apiAction}/${this.apiTokenInstance}`+endpoindAdditional).then(data => data.data)
        }
    }

    checkGreenApiInstance = ():Promise<CheckApiInstanceResponse> =>  {
        return this.createReguest(ApiAction.checkApiInstance, Methods.GET)
    }

    generateChatId = (phone: string) => {
        return `${phone}@c.us`
    }

    checkPhoneWhatsAppReg = (phone: string):Promise<CheckPhoneWhatsapPhoneReg> => {
        return this.createReguest(ApiAction.checkPhoneReg, Methods.POST, {phoneNumber: phone})
    }

    sendMessage = (phone: string, message: string):Promise<SendMessageResponse> => {
        return this.createReguest(ApiAction.sendMessage,Methods.POST,{chatId: this.generateChatId(phone), message})
    }

    getChatLastMessages = (phone: string):Promise<GetChatMessagesResponse> => {
        return this.createReguest(ApiAction.getChatMessages, Methods.POST, {chatId: this.generateChatId(phone)})
    }

    getAccountSettings = ():Promise<GetAccountSettings> => {
        return this.createReguest(ApiAction.getSettings, Methods.GET)
    }

    getNotification = ():Promise<GetNotificationResponse | null> => {
        return this.createReguest(ApiAction.receiveNotification, Methods.GET)
    }

    removeNotification = (notificationId: number) => {
        return this.createReguest(ApiAction.deleteNotification, Methods.DELETE,null,`/${notificationId}`)
    }
}
