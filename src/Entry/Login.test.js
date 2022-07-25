import {screen, render} from "@testing-library/react";

import {Login} from "./Login";
import userEvent from "@testing-library/user-event";

test("Should render input box with label 'Username:'",()=>{
    render(<Login _useDispatch = {()=>{}}/>)
    const input = screen.getByLabelText('Username:')
    expect(input.tagName).toBe('INPUT')
})

test("Should render input box with label 'Password:' and type 'password'",()=>{
    render(<Login _useDispatch = {()=>{}}/>)
    const input = screen.getByLabelText('Password:')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'password')
})

test("Should feature button with text 'Login'",()=>{
    render(<Login _useDispatch = {()=>{}}/>)
    const button = screen.getByText("Login")
    expect(button.tagName).toBe('BUTTON')
})

test("username input should update local state", ()=>{
    render(<Login _useDispatch = {()=>{}}/>)
    const uName = screen.getByLabelText("Username:")
    userEvent.type(uName, "user")
    expect(uName).toHaveValue("user")
})

test("password input should update local state",()=>{
    render(<Login _useDispatch = {()=>{}}/>)
    const pWord = screen.getByLabelText("Password:")
    userEvent.type(pWord, "pass")
    expect(pWord).toHaveValue("pass")
})

test("Button should call login when login",()=>{
    const dispatch = jest.fn()
    const _login = jest.fn()
    render(<Login _useDispatch = {()=>dispatch} _login = {_login}/>)
    const button = screen.getByText("Login")
    const uName = screen.getByLabelText("Username:")
    const pWord = screen.getByLabelText("Password:")
    userEvent.type(uName, "naim")
    userEvent.type(pWord, "hunter12")
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith(_login())
    expect(_login).toHaveBeenCalledWith("naim","hunter12")
})

