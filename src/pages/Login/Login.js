import React, { useState } from 'react'
import styles from './login.module.scss'
import { Input, Button } from '../../components/Form'
import { useToasts } from '../../components/Toaster'
import validation from './validation'
import Axios from '../../utils/axios'

const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const { addToast } = useToasts()

    const handleSubmit = e => {
        e.preventDefault()
        const errors = validation({ email, password })
        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            return addToast('Oops! invalid credentials', {
                appearance: 'error'
            })
        }
        return Axios.post(`/auth/login`, { email, password })
            .then(response => {
                addToast(response.data.message, { appearance: 'success' })
                const token = response.data.token
                return localStorage.setItem(
                    'countryToken',
                    JSON.stringify(token)
                )
            })
            .catch(({ response: { data } }) =>
                addToast(data[0].message, { appearance: 'error' })
            )
    }
    return (
        <div className={styles.Login}>
            <div className={styles.LoginForm}>
                <form
                    className={styles.LoginFormContainer}
                    onSubmit={handleSubmit}
                >
                    <h2>Hello! login here</h2>
                    <Input
                        label={'Email'}
                        name={'email'}
                        type={'email'}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        error={errors.email}
                        required
                    />
                    <Input
                        label={'Password'}
                        name={'password'}
                        type={'password'}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        error={errors.password}
                        required
                    />

                    <Button type={'submit'} value={'Submit'} />
                </form>
            </div>
            <div className={styles.LoginImageHolder}></div>
        </div>
    )
}

export default Login
