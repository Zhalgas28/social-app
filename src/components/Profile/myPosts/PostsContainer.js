import { addNewPostActionCreator } from "../../../redux/profileReducer"
import Posts from "./Posts"

function PostsContainer({ store }) {
  const state = store.getState().profilePage
	
	const addNewPostHandler = (text) => {
		store.dispatch(addNewPostActionCreator(text))
	}

	return <Posts posts={state.posts} addNewPostText={addNewPostHandler}/>
}

export default PostsContainer;
