import React from "react";


export interface ContextProp {
    children: React.ReactNode;
}

export interface AuthContextProp {
    user: object | null;
    dispatch: React.Dispatch<AuthActionProp>;
}

export interface AuthStateProp {
    user: object | null;
}

export interface AuthActionProp {
    type: "LOGIN" | "LOGOUT";
    payload: object;
}