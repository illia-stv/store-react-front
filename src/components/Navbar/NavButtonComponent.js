import React from 'react'

const NavButtonComponent = (props) => {
    return (
        <div onClick={() => props.linkClick(props.val)} className='navbar_navbar-menu_title'>
            {props.val}
        </div>  
    )
}

export default NavButtonComponent
