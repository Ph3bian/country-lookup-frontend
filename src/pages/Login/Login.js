import React, { useState, useEffect } from 'react'
import styles from './login.module.scss'
import { Input, useForm, Button } from '../../components/Form'
import { useToasts} from '../../components/Toaster'
import validation from "./validation"
import Axios from "../../utils/axios"

const Login = ({ history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { addToast } = useToasts()


    const login = () => {
        // Axios.post(`/auth/login`, { email, password }).then((response) => {
        //      addToast(response.message, { appearance: 'success' })
        //     const token = response.data.token
        //     history.push(`/`)
        //     localStorage.setItem("countryToken", JSON.stringify(token))
        // }).catch(({ error }) => toaster.error(error.message))
    }

    const {
        errors,
        handleSubmit,
    } = useForm(login, validation, { email, password });


    return (
        <div className={styles.Login}>
            <div className={styles.LoginForm}>
                <form className={styles.LoginFormContainer} onSubmit={handleSubmit}>

                    <input
                        name='email'
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                      

                        required
                    />

                    <input
                        name={'password'}
                        type={'password'}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    

                    />

                    <Button type={"submit"} value={"Submit"} />
                </form>
            </div>
            <div className={styles.LoginImageHolder}>

            </div>
        </div>
    )
}

export default Login
