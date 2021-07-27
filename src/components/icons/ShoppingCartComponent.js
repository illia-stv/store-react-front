import React from 'react'
import '../../styles/navbar.css'

const ShoppingCartComponent = (props) => {
    return (
        <div onClick={() => props.linkClick('cart')} className='navbar_navbar-menu_title'>
            <div className='cart_logo'>
                {props.children}
            </div>
        </div>
    )
}

export default ShoppingCartComponent
