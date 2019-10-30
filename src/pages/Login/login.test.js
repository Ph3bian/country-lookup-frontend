import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { ToastProvider } from 'react-toast-notifications'
import Login from './Login'

let container = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})
afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('renders with or without setAuth', () => {
    act(() => {
        render(
            <ToastProvider>
                <Login />
            </ToastProvider>,
            container
        )
    })
    const header = container.querySelector('h2')
    expect(container.querySelector('form')).toBeDefined()
    expect(container.querySelector('button').innerHTML).toBe('Submit')
    expect(header.textContent).toBe('Hello! login here')
})

it('renders with props setAuth', () => {
    const props = { setAuth: jest.fn(() => false) }
    act(() => {
        render(
            <ToastProvider>
                <Login {...props} />
            </ToastProvider>,
            container
        )
    })
    

    expect(props.setAuth).toMatchSnapshot()
})
