import React, {useState, useEffect} from 'react'
import '../styles/productpage.css'
import {useTranslation} from 'react-i18next';
import ProductPageListComponent from '../components/ProductPage/ProductPageListComponent';
import ProductPageElementComponent from '../components/ProductPage/ProductPageElementComponent';
import ProductImageComponent from '../components/ProductPage/ProductImageComponent'

const ProductPage = (props) => {
    const categoryList = props.currentCategories.map((item) => [item.Name,item.id])
    const [underCategory, setUnderCategories] = useState([])
    const [id,setId] = useState(props.id || 1);
    const { t } = useTranslation();

    return (
        <>
            <div className='product-page'>
                <div className='product-page_title' onClick={() => console.log(underCategory[0].Descriptions.split('\n'))}>
                    {t("productPageTitle")}
                </div>
            </div>

            <ProductPageListComponent>
                {underCategory.map((item, key) =>
                    <ProductPageElementComponent item={item} key={key}>
                        <ProductImageComponent photourl={item.PhotoURL}/>

                    </ProductPageElementComponent>
                )}
            </ProductPageListComponent>
        </>
    )
}

export default ProductPage
