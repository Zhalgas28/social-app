type messageType = {
  userId: number | string
  text: string
}

type initialStateType = {
  messages: Array<messageType>
}

const initialState: initialStateType = {
  messages: [],
};

export const addNewMessageActionCreator = (text: string) => {
  return {
    type: "ADD-NEW-MESSAGE",
    text,
  };
};

type ActionsTypes = ReturnType<typeof addNewMessageActionCreator>

export default function messagesReducer(state = initialState, action: ActionsTypes) {
  switch (action.type) {
    case "ADD-NEW-MESSAGE":
      const newMessage: messageType = {
        userId: 1,
        text: action.text
      };

      return {
				...state,
				messages: [...state.messages, newMessage]
			};
    default:
      return state;
  }
}
