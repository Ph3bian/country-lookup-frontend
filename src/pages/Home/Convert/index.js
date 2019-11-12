import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/Form'
import { useToasts } from 'components/Toaster'
import { Close } from 'assets/svg'
import styles from './convert.module.scss'

const Convert = ({ setAmount, closeConvertSlider }) => {
    const { addToast } = useToasts()
    const [convertAmount, setConvertAmount] = useState(0)
    let error = ''
    const handleSubmit = e => {
        e.preventDefault()
        if (convertAmount <= 0) {
            return addToast('Enter valid amount', { appearance: 'info' })
        }
        if (convertAmount.match(/^\d+\.?\d*$/) === null) {
            error = 'Enter valid amount'
            return addToast('Invalid amount', { appearance: 'info' })
        }
        setAmount(convertAmount)
        return closeConvertSlider(false)
    }

    const closeConvert = () => closeConvertSlider(false)

    return (
        <div className={styles.Convert}>
            <div className={styles.ConvertHeader}>
                <p>Convert Amount</p>
                <span onClick={closeConvert}>
                    <Close />
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.ConvertBody}>
                    <Input
                        name={'amount'}
                        value={convertAmount}
                        onChange={e => setConvertAmount(e.target.value)}
                        label="Amount"
                        type={'text'}
                        error={error}
                    />
                    <Button type={'submit'} value={'Submit'} />
                </div>
            </form>
        </div>
    )
}
Convert.propTypes = {
    setAmount: PropTypes.func,
    closeConvertSlider: PropTypes.func
}
export default Convert
