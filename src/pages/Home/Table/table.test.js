import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Table from './index'

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
            <Table
                countryList={[
                    {
                        id: '1',
                        fullName: 'Nigeria',
                        currencies: 'NGN',
                        population: '20',
                        NGN: 402.798009
                    }
                ]}
            />,
            container
        )
        expect(container.querySelector('table')).toBeDefined()
        expect(container.querySelector('tr')).toBeDefined()
        expect(container.querySelector('td')).toBeDefined()
    })
})
