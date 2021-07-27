import React from 'react'

const CartProductImageComponent = ({photourl}) => {
    return (
        <div className='cart_product-block'>
            <img className='cart_product-block_img' src={photourl} />
        </div>
    )
}

export default CartProductImageComponent
