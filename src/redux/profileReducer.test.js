import profileReducer, { addNewPostAC } from "./profileReducer"


it("post should be added", () => {
    const state = {
        posts: []
    }
    const action = addNewPostAC("new post")
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})