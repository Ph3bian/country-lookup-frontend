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

it('renders with props countryList', () => {
    act(() => {
        render(
            <Table
                countryList={[
                    {
                        id: '1',
                        fullName: 'Nigeria',
                        formattedCurreny: 'NGN',
                        population: '20',
                        currency: [
                            {
                                code: 'NGN',
                                name: 'Nigerian naira',
                                symbol: '₦',
                                rate: 404.792991
                            }
                        ],
                        exchangeRates: {
                            NGN: 404.792991
                        }
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
