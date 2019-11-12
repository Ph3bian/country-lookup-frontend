import React from 'react'
import PropTypes from 'prop-types';
import styles from './nav.module.scss'
import { Button } from 'components/Form'



const Nav = ({setAuth}) => {
    const logout=()=>{
        localStorage.removeItem('countryToken')
        return setAuth(false)
    }
    return (
        <div className={styles.Nav}>
            <h3>Country Lookup</h3>
            <Button value={'Logout'} onClick={logout} type={'button'} />
        </div>
    )
}
Nav.propTypes = {
    setAuth: PropTypes.func
}
export default Nav
