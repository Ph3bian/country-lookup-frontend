import React from 'react'
import { render, fireEvent , cleanup,} from '@testing-library/react'
import { ToastProvider } from 'react-toast-notifications'
import Login from './Login'



test('Update EmailInput value onChange', () => {
    // Arrange
    const fakeUser = { email: 'pheb@gmail.com', password: '15656134' }
    const props = { setAuth: jest.fn(() => false) }
    const { getByLabelText } = render(
        <ToastProvider>
            <Login {...props} />
        </ToastProvider>
    )

    let emailNode = getByLabelText('Email')

    // Act
    fireEvent.change(emailNode, { target: { value: fakeUser.email } })

    // Assert
    expect(emailNode.value).toBe(fakeUser.email)
})

test('Update PasswordInput value onChange', () => {
    // Arrange
    const fakeUser = { email: 'pheb@gmail.com', password: '15656134' }
    const props = { setAuth: jest.fn(() => false) }
    const { getByLabelText } = render(
        <ToastProvider>
            <Login {...props} />
        </ToastProvider>
    )

    let passwordNode = getByLabelText('Password')

    // Act
    fireEvent.change(passwordNode, { target: { value: fakeUser.password } })

    // Assert
    expect(passwordNode.value).toBe(fakeUser.password)
})

test('handle formSubmit', () => {
    // Arrange
    const fakeUser = { email: 'pheb@gmail.com', password: '15656134' }
    const props = { setAuth: jest.fn(() => false) }
    const { getByLabelText, getByText } = render(
        <ToastProvider>
            <Login {...props} />
        </ToastProvider>
    )

    let passwordNode = getByLabelText('Password')
    let emailNode = getByLabelText('Email')

    // Act
    fireEvent.change(emailNode, { target: { value: fakeUser.email } })
    fireEvent.change(passwordNode, { target: { value: fakeUser.password } })
    fireEvent.click(getByText('Submit'))
    // Assert
    expect(passwordNode.value).toBe(fakeUser.password)
})