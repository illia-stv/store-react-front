import React from 'react'

const ProductDescComponent = (props) => {
    return (
        <div className='product-page_flex_product_desc'>
            {props.children}
        </div>
    )
}

export default ProductDescComponent
