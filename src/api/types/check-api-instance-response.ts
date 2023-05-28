export interface CheckApiInstanceResponse {
    stateInstance: ApiStateInstance;
}

export enum ApiStateInstance {
    authorized = 'authorized',
    notAuthorized = 'notAuthorized',
    blocked = 'blocked',
    starting = 'starting',
    sleepMode = 'sleepMode',
}