import { v4 as uuidv4 } from "uuid";

export const addNewMessageActionCreator = (text) => {
  return {
    type: "ADD-NEW-MESSAGE",
    text,
  };
};

const initialState = {
  messages: [],
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD-NEW-MESSAGE":
      const newMessage = {
        id: uuidv4(),
        userId: 1,
        text: action.text,
      };

      return {
				...state,
				messages: [...state.messages, newMessage]
			};
    default:
      return state;
  }
}
