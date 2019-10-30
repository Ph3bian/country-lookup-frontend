import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { ToastProvider } from 'react-toast-notifications'
import Convert from './index'

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

it('renders with or without props', () => {
    act(() => {
        render(
            <ToastProvider>
                <Convert />
            </ToastProvider>,
            container
        )
    })
    const header = container.querySelector('p')
    expect(container.querySelector('form')).toBeDefined()
    expect(container.querySelector('button').innerHTML).toBe('Submit')
    expect(header.textContent).toBe('Convert Amount')
})


