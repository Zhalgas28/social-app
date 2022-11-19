import { v4 as uuidv4 } from "uuid";

export default function messagesReducer(state, action) {
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
