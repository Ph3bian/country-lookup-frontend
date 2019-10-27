import React from "react"
import styles from "./button.module.scss"

const Button = ({ type, value, ...rest }) => (
    <button className={styles.Button} {...rest} type={type}> {value}</button>
)

export default Button