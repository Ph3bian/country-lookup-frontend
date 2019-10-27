import React from 'react'
import styles from './input.module.scss'


const Input = ({ label, type, name, error, ...rest }) => (
    <div className={styles.Input}>
        <label className={styles.InputLabel} htmlFor={name}>
            {label}
            <input className={styles.InputField} type={type} id={name} name={name} {...rest} />
            {error && <span>{error}</span>}
        </label>
    </div>
)
export default React.forwardRef((props, ref) => (
	<Input ref={ref} {...props} />
))

