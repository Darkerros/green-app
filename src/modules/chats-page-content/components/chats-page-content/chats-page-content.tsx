import React from 'react';
import {ChatsPageLeftSide} from "../chats-page-left-side/chats-page-left-side";
import {ChatsPageRightSide} from "../chats-page-right-side/chats-page-right-side";

export const ChatsPageContent = () => {
    return (
        <>
            <ChatsPageLeftSide/>
            <ChatsPageRightSide/>
        </>
    );
};
