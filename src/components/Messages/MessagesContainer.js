import { connect } from "react-redux";
import { addNewMessageActionCreator } from "../../redux/messagesReducer";
import Messages from "./Messages";

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessageText(text) {
      dispatch(addNewMessageActionCreator(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
