import React from 'react'
import { Button } from 'components/Form'
import styles from './table.module.scss'
import { numFormat, convertAmount } from './functions'

const Table = ({ countryList, setCountryList, amount }) => {
    const handleDelete = id => {
        let newCountryList = countryList.filter(country => country.id !== id)

        setCountryList(newCountryList)

        return localStorage.setItem(
            'countryList',
            JSON.stringify(newCountryList)
        )
    }

    return (
        <div className={styles.Table}>
            <table>
                <thead>
                    <tr>
                        <th>Full name</th>
                        <th>Population</th>
                        <th>Currencies</th>
                        <th>Exchange Rates</th>
                        <th>Action</th>
                        {amount !== 0 && amount && <th>Result (EUR)</th>}
                    </tr>
                </thead>
                <tbody>
                    {countryList.map(country => (
                        <tr key={`${country.fullName}-${country.id}`}>
                            <td>{country.fullName}</td>
                            <td>{Number(country.population)}</td>
                            <td>{country.formattedCurreny}</td>
                            <td>{numFormat(country.currency).map((currency, index)=><span key={index}> {currency}</span>)}</td>
                            <td>
                                <Button
                                    value={'Delete'}
                                    className={styles.Table__Delete}
                                    type="button"
                                    onClick={() => handleDelete(country.id)}
                                />
                            </td>
                            {amount > 0 && (
                                <td>
                                    {convertAmount(amount, country.currency).map((result, index)=><span key={index}> {result}</span>)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
