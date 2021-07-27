import React from 'react'

const LogoutComponent = (props) => {
    return (
        <div onClick={() => props.logout()} className='navbar_navbar-menu_title'>
            <div className='logout_logo' >
                {props.children}
            </div>
        </div>
    )
}

export default LogoutComponent
