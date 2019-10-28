import React, { useState } from 'react'
import Axios from '../../utils/axios'
import { useToasts } from '../../components/Toaster'

const Home = () => {
    const [country, setCountry] = useState('')
    const { addToast } = useToasts()
    const [countryList, setCountryList] = useState([])

    const handleSubmit = () => {
        Axios.post(`/countries`, { params: country })
            .then(response => {
                setCountryList([...countryList, response])
                return addToast(response.message, { appearance: 'success' })
            })
            .catch(({ error }) =>
                addToast(error.message, { appearance: 'error' })
            )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default Home
