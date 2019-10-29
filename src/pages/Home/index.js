import React, { useState } from 'react'
import Axios from '../../utils/axios'
import { useToasts } from '../../components/Toaster'
import styles from './home.module.scss'
import { Input, Button } from '../../components/Form'

const Home = () => {
    const [country, setCountry] = useState('')
    const { addToast } = useToasts()
    const [countryList, setCountryList] = useState(
        localStorage.getItem('countryList')
            ? JSON.parse(localStorage.getItem('countryList'))
            : []
    )

    const handleSubmit = e => {
        e.preventDefault()

        Axios.get(`/countries`, { params: { search: country } })
            .then(({ data }) => {
                console.log(data, 'data')
                setCountryList([...countryList, data.body])
                localStorage.setItem('countryList', JSON.stringify(countryList))
                return addToast(data.message, { appearance: 'success' })
            })
            .catch(({ response }) => {
                if (response) {
                    addToast(response.data.error.message, {
                        appearance: 'error'
                    })
                } else {
                    addToast('Oops Something went wrong', {
                        appearance: 'error'
                    })
                }
            })
    }

    const handleDelete = id => {
        let newCountryList = countryList.filter(country => country.id !== id)
        setCountryList(newCountryList)
        return localStorage.setItem(
            'countryList',
            JSON.stringify(newCountryList)
        )
    }

    const handleConversion = () => {}
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
                    <div>
                        <Button type="submit">Search</Button>
                        <Button type="button" onClick={() => handleConversion}>
                            Convert Amount
                        </Button>
                    </div>
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countryList.map(country => (
                                    <tr
                                        key={`${country.fullName}-${country.id}`}
                                    >
                                        <td>{country.fullName}</td>
                                        <td>{String(country.population)}</td>
                                        <td>{country.currencies}</td>
                                        <td>{country[country.currencies]}</td>
                                        <td>
                                            <Button className={styles.HomeContainer__ListDelete}
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(country.id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Home
