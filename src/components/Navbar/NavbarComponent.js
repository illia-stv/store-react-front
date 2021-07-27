import React from 'react'

const NavbarComponent = (props) => {
    return (
        <div className='navbar'> 
            <div className='navbar-menu'>
                {props.children}    
            </div>
        </div>
    )
}

export default NavbarComponent
