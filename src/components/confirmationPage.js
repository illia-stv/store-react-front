import React from 'react'
import {ReactComponent as ConfimationLogo} from '../assets/svg/confirmation.svg';
import '../styles/confirmationPage.css'

const ConfirmationPage = () => {
    return (
        <div className='confirmed'>
            <h1 className='confirmed-title'>Confirmed</h1>
            <ConfimationLogo className='confirmed-logo' width={'60px'} fill={'green'} />
        </div>
    )
}

export default ConfirmationPage
