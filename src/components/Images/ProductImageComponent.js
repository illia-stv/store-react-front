import React from 'react'
import '../../styles/productpage.css'

const ProductImageComponent = ({photourl}) => {
    return (
        <div className='product-page-img_block'>
            <img className='product-page-img' src={photourl} />
        </div>
    )
}

export default ProductImageComponent
