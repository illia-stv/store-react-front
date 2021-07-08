import React from 'react'
import PropTypes from 'prop-types';
import '../styles/productpage.css'
import UnderMenu from '../components/underMenu'

const ProductPage = (props) => {
    // console.log(props.currentCategories)
    return (
        <>
        <UnderMenu categories={props.currentCategories}/>
        <div className='product-page'>
            
        </div>
        </>
    )
}

ProductPage.propTypes = {
    currentCategories: PropTypes.object
}

export default ProductPage
