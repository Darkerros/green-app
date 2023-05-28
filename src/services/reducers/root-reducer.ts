import {combineReducers} from "@reduxjs/toolkit";
import {accountSettingsReducer} from "./account-settings-reducer";
import {chatReducer} from "./chat-reducer";

export const rootReducer = combineReducers({
    accountSettingsReducer,
    chatReducer
})