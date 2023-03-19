import { createContext, useReducer, Reducer } from "react";
import { AuthActionProp, AuthContextProp, AuthStateProp, ContextProp } from "../utils/types";


const AuthContext = createContext<AuthContextProp>(null!);


const authReducer: Reducer<AuthStateProp, AuthActionProp> = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }

        case "LOGOUT":
            return {
                user: null
            }

        default:
            return state;
    }
}


const initialValue = {
    user: null
}


export const AuthContextProvider = ({ children }: ContextProp) => {

    const [state, dispatch] = useReducer(authReducer, initialValue);

    return (
        <AuthContext.Provider value={{ user: state.user, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}


export default AuthContext;