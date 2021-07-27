import React from 'react'
import '../../styles/navbar.css'

const AppleLogoComponent = (props) => {
    return (
        <div onClick={() => props.linkClick('home')} className='AppleLogo'>
            {props.children}
        </div>
    )   
}

export default AppleLogoComponent
