import {PostType} from "./State";
import {addPostAC, postsReducer} from "./postsReducer";

test('post should be added', () => {
    const startState: PostType[] = [
        {id: '1', name: 'Ann', body: 'first', likes: 0},
        {id: '2', name: 'John', body: 'second', likes: 0},
    ]

    let newBody = 'new'

    const endState = postsReducer(startState, addPostAC(newBody))

    expect(endState.length).toBe(3)
    expect(endState[0].body).toBe(newBody)
})