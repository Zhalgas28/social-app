import { connect } from "react-redux";
import { withRedirect } from "../../hoc/withRedirect";
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
)(withRedirect(Messages));

export default MessagesContainer;
