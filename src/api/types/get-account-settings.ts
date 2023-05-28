export interface GetAccountSettings {
    wid: string,
    countryInstance: string,
    typeAccount: string,
    webhookUrl: string,
    webhookUrlToken: string,
    delaySendMessagesMilliseconds: number,
    markIncomingMessagesReaded: Answer,
    markIncomingMessagesReadedOnReply: Answer,
    outgoingWebhook: Answer,
    outgoingMessageWebhook: Answer,
    stateWebhook: Answer,
    incomingWebhook: Answer,
    deviceWebhook: Answer,
    statusInstanceWebhook: Answer,
}

enum Answer {
    yes = "yes",
    no = "no",
}