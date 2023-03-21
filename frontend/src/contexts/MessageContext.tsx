import { createContext, useReducer, Reducer } from 'react';
import { ContextProp, MessageActionProp, MessageContextProp, MessageStateProp } from '../utils/types';



const MessageContext = createContext<MessageContextProp>(null!);



const messageReducer: Reducer<MessageStateProp, MessageActionProp> = (state, action) => {

    switch (action.type) {
        case "FETCH_MESSAGE":
            return {
                messages: [...state.messages, action.payload]
            }

        case "DELETE_MESSAGE":
            return {
                messages: state.messages.filter(message => message._id != action.payload._id)
            }

        default:
            return state;
    }
}


const initialValue = {
    messages: []
}


export const MessageContextProvider = ({ children }: ContextProp) => {

    const [state, dispatch] = useReducer(messageReducer, initialValue);

    return (
        <MessageContext.Provider value={{ messages: state.messages, dispatch }}>

        </MessageContext.Provider>
    )
}



export default MessageContext;