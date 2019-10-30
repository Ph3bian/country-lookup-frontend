import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Nav from './index'

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
        
                <Nav />
              
           ,
            container
        )
    })
    const header = container.querySelector('h3')
    expect(container.querySelector('button').innerHTML).toBe('Logout')
    expect(header.textContent).toBe('Country Lookup')
})
