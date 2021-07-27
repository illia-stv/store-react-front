import React from 'react'
import '../../styles/cart.css'

const SimpleDescComponent = (props) => {
    return (
        <div className='cart_product-info_bottom_desc'>
            {props.children}
        </div>
    )
}

export default SimpleDescComponent
