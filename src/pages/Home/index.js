import React, { useState } from 'react'
import Axios from '../../utils/axios'
import { useToasts } from '../../components/Toaster'
import styles from './home.module.scss'
import { Input } from '../../components/Form'

const Home = () => {
    const [country, setCountry] = useState('')
    const { addToast } = useToasts()
    const [countryList, setCountryList] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
    
        Axios.get(`/countries`, { params: { search: country } })
            .then(response => {
                setCountryList([...countryList, response])
                return addToast(response.message, { appearance: 'success' })
            })
            .catch(({ response: { data } }) =>
                addToast(data.error.message, { appearance: 'error' })
            )
    }

    return (
        <div className={styles.Home}>
            <div className={styles.HomeContainer}>
                <form
                    onSubmit={handleSubmit}
                    className={styles.HomeContainer__Search}
                >
                    <Input
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                <div className={styles.HomeContainer__List}>
                    {countryList.length !== 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Full name</th>
                                    <th>Population</th>
                                    <th>Currencies</th>
                                    <th>Exchange Rates</th>
                                </tr>
                            </thead>
                            <tbody>
                                countryList.map((country)=>(
                                <tr>
                                    <td>{country.fullName}</td>
                                    <td>{country.population}</td>
                                    <td>{country.currencies}</td>
                                    <td>{country.exchangeRates}</td>
                                </tr>
                                ))
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Home
