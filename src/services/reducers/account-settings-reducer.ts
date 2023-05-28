import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GetAccountSettings} from "../../api/types/get-account-settings";
import {getAccountSettingsThunk} from "../thunks/get-account-settings-thunk";

interface AccountSettingsReducerState {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    errorMessage: string | null;
    settings: GetAccountSettings | null;
}

const accountSettingsReducerState: AccountSettingsReducerState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    settings: null,
    errorMessage: '',
}

const accountSettingsSlice = createSlice({
    name: 'AccountSettingsSlice',
    initialState: accountSettingsReducerState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAccountSettingsThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.settings = null;
            })
            .addCase(getAccountSettingsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.settings = null;
                state.errorMessage = JSON.stringify(action.payload)
            })
            .addCase(getAccountSettingsThunk.fulfilled, (state, action:PayloadAction<GetAccountSettings>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.settings = action.payload;
            })

    }
})

export const accountSettingsReducer = accountSettingsSlice.reducer;
export const accountSettingsReducerActions = accountSettingsSlice.actions;