import React from 'react'
import styles from './nav.module.scss'
import { Button } from 'components/Form'



const Nav = () => {
    const logout=()=>localStorage.removeItem('countryToken')
    return (
        <div className={styles.Nav}>
            <h3>Country Lookup</h3>
            <Button value={'Logout'} onClick={logout} type={'button'} />
        </div>
    )
}
export default Nav
