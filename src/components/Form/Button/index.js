import React from 'react'
import styles from './button.module.scss'
import Loader from 'components/Loader'

const Button = ({ type, value, loading, ...rest }) => (
    <button className={styles.Button} {...rest} type={type}>
        {loading ? <Loader /> : value}
    </button>
)

export default Button
