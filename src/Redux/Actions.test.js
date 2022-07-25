import {initState, LOGIN_SUCCESSFUL, reducer} from "./Actions"

test("should init to proper state",()=>{
    const state = reducer()
    expect(state).toStrictEqual(initState)
})

test("LOGIN_SUCCESSFUL should update state as expected",()=>{
    const state = reducer(initState,{type:LOGIN_SUCCESSFUL})
    expect(state).toStrictEqual({...initState,
    isLoggedIn: true
    })
})