import React from "react";


export interface ContextProp {
    children: React.ReactNode;
}

type User = {
    username: string;
    token: string;
}

export interface AuthContextProp {
    user: User | null;
    dispatch: React.Dispatch<AuthActionProp>;
}

export interface AuthStateProp {
    user: User | any;
}

export interface AuthActionProp {
    type: "LOGIN" | "LOGOUT";
    payload: object;
}


export interface MessageContextProp {
    messages: MessageProp[];
    dispatch: React.Dispatch<MessageActionProp>;
}


export interface MessageProp {
    _id: string;
    message: string;
    createdAt: string;
}


export interface MessageStateProp {
    messages: MessageProp[]
}


export interface MessageActionProp {
    type: "FETCH_MESSAGE" | "DELETE_MESSAGE";
    payload: object;
}