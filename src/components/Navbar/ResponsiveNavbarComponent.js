import React from 'react'

const ResponsiveNavbarComponent = (props) => {
    return (
        <nav onClick={props.navbar ? () => props.setNavbar(!props.navbar) : null} className='navbar-resp'>
            {props.children}      
        </nav>
    )
}

export default ResponsiveNavbarComponent
