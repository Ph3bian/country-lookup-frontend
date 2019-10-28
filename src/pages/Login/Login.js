import React, { useState, useEffect } from 'react'
import styles from './login.module.scss'
import { Input, Button } from '../../components/Form'
import { useToasts } from '../../components/Toaster'
import validation from './validation'
import Axios from '../../utils/axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const { addToast } = useToasts()

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validation({ email, password }))

        if (Object.keys(errors).length !== 0) {
            addToast('Oops! invalid credentials', {
                appearance: 'error'
            })
            return errors
        }
        // Axios.post(`/auth/login`, { email, password }).then((response) => {
        //      addToast(response.message, { appearance: 'success' })
        // Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //     const token = response.data.token
        //     history.push(`/`)
        //     localStorage.setItem("countryToken", JSON.stringify(token))
    }

    return (
        <div className={styles.Login}>
            <div className={styles.LoginForm}>
                <form
                    className={styles.LoginFormContainer}
                    onSubmit={handleSubmit}
                >
                    <Input
                        name={'email'}
                        type={'email'}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        error={errors.email}
                        required
                    />

                    <Input
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
