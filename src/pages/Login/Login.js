import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './login.module.scss'
import { Input, Button } from 'components/Form'
import { useToasts } from 'components/Toaster'
import validation from './validation'
import Axios from 'utils/axios'

const Login = ({setAuth}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
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
        setLoading(true)

        return Axios.post(`/auth/login`, { email, password })
            .then(response => {
                addToast(response.data.message, { appearance: 'success' })
                const token = response.data.token
                setAuth(true)
                localStorage.setItem('countryToken', JSON.stringify(token))
                return setLoading(false)
            })
            .catch(({ response }) => {
                if (response) {
                    addToast(response.data[0].message, {
                        appearance: 'error'
                    })
                    return setLoading(false)
                } else {
                    addToast('Oops Something went wrong', {
                        appearance: 'error'
                    })
                    return setLoading(false)
                }
            })
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
                        onChange={e => setEmail(e.target.value.toLowerCase())}
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

                    <Button
                        type={'submit'}
                        value={'Submit'}
                        loading={loading}
                      
                    />
                </form>
            </div>
            <div className={styles.LoginImageHolder}></div>
        </div>
    )
}
Login.propTypes = {
    setAuth: PropTypes.func,
   
}
export default Login
