import React from 'react'
import '../../styles/cart.css'

const CartComponent = (props) => {
    
 
    return (
        <div className='cart'>
            {props.children}
        </div>
    )
}

export default CartComponent
