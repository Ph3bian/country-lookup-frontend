import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Axios from 'utils/axios'
import { useToasts } from 'components/Toaster'
import styles from './home.module.scss'
import { Input, Button } from 'components/Form'
import Nav from './Nav'
import Table from './Table'
import Convert from './Convert'

const Home = ({ setAuth }) => {
    const [country, setCountry] = useState('')
    const { addToast } = useToasts()
    const [isConvert, setIsConvert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [countryList, setCountryList] = useState(
        localStorage.getItem('countryList')
            ? JSON.parse(localStorage.getItem('countryList'))
            : []
    )
    const [amount, setAmount] = useState(0)
    const handleSubmit = e => {
        e.preventDefault()
        if (!country) {
            return addToast('Enter valid country name', { appearance: 'info' })
        }
        setLoading(true)
        return Axios.get(`/countries`, { params: { search: country } })
            .then(({ data }) => {
                setCountry('')
                let newCountryList = [...countryList, data.body]
                setCountryList(newCountryList)
                localStorage.setItem(
                    'countryList',
                    JSON.stringify(newCountryList)
                )
                addToast(data.message, { appearance: 'success' })
                return setLoading(false)
            })
            .catch(({ response }) => {
                if (response) {
                    addToast(response.data.message, {
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

    const handleConversion = () => setIsConvert(true)
    const closeConvertSlider = value => setIsConvert(value)
    const clearConversion = () => setAmount(0)

    return (
        <div className={styles.Home}>
            <Nav setAuth={setAuth} />
            <div className={styles.HomeContainer}>
                <div className={styles.HomeContainerBody}>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.HomeContainer__Search}
                    >
                        <div className={styles.HomeContainer__SearchContainer}>
                            <div id={styles.searchIcon}></div>
                            <Input
                                name={'country'}
                                placeholder={'Enter Country Name'}
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                            />
                        </div>
                        <div className={styles.HomeContainer__Button}>
                            <Button
                                type="submit"
                                loading={loading}
                                value={'Search'}
                            />
                            {amount === 0 && (
                                <Button
                                    type="button"
                                    value={'Convert Amount'}
                                    onClick={handleConversion}
                                />
                            )}
                            {amount !== 0 && (
                                <Button
                                    type="button"
                                    value={'Clear Result'}
                                    onClick={clearConversion}
                                />
                            )}
                        </div>
                    </form>

                    {countryList.length !== 0 && (
                        <div className={styles.HomeContainer__List}>
                            <Table
                                countryList={countryList}
                                setCountryList={setCountryList}
                                amount={amount}
                            />
                        </div>
                    )}
                </div>

                {isConvert && (
                    <Convert
                        closeConvertSlider={closeConvertSlider}
                        setAmount={setAmount}
                    />
                )}
            </div>
        </div>
    )
}
Home.propTypes = {
    setAuth: PropTypes.func
}

export default Home
