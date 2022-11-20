import { addNewMessageActionCreator } from "../../redux/messagesReducer";
import Messages from "./Messages";

function MessagesContainer({ store }) {
  const state = store.getState().messagesPage;
	
	const addNewMessageHandler = (text) => {
		store.dispatch(addNewMessageActionCreator(text))
	}

	return <Messages messages={state.messages} addNewMessageText={addNewMessageHandler}/>
}

export default MessagesContainer;
