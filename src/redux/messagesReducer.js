import { v4 as uuidv4 } from "uuid";

const initialState = {
	messages: []
}

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD-NEW-MESSAGE":
      const newMessage = {
        id: uuidv4(),
        userId: 1,
        text: action.text,
      };
      state.messages.push(newMessage);
			return state
    default:
      return state;
  }
}
