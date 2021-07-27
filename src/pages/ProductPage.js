import React, {useState, useEffect} from 'react'
import '../styles/productpage.css'
import axios from 'axios'
import {useTranslation} from 'react-i18next';
import ProductPageListComponent from '../components/ProductPage/ProductPageListComponent';
import ProductPageElementComponent from '../components/ProductPage/ProductPageElementComponent';
import ProductImageComponent from '../components/Images/ProductImageComponent'
import ProductTitleComponent from '../components/Title/ProductTitleComponent';
import ProductCostComponent from '../components/ProductPage/ProductCostComponent';
import BuyButtonPage from '../pages/Buttons/BuyButtonPage'
import ToCartButtonPage from './Buttons/ToCartButtonPage';
import ProductDescComponent from '../components/Descriptions/ProductDescListComponent'
import ProductBigTitle from '../components/ProductPage/ProductBigTitle';
import UnderMenu from '../components/underMenu';

const ProductPage = (props) => {
    const categoryList = props.currentCategories.map((item) => [item.Name,item.id])
    const [underCategory, setUnderCategories] = useState([])
    const [id,setId] = useState(props.id || 1);
    

    useEffect(()=> {
        axios.get(props.url+`/under-categories/`+ id)
        .then(res => {
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    },[])


    const setMyId = (_id) => {
        setId(_id)
        axios.get(props.url+`/under-categories/`+_id)
        .then(res => {
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    }


    return (
        <>
            <UnderMenu setMyId={setMyId} categories={categoryList} />

            <ProductBigTitle/>

            <ProductPageListComponent>
                {underCategory.map((item, key) =>
                    <ProductPageElementComponent item={item} key={key}>
                        <ProductImageComponent photourl={item.PhotoURL}/>
                        <ProductTitleComponent name={item.Name}/>
                        <ProductCostComponent price={item.Price}/>
                        <BuyButtonPage val={'Buy'} item={item}/>
                        <ToCartButtonPage val={'Add to Cart'} item={item}/>
                        <ProductDescComponent>
                            {item.Descriptions.split('\n').map((item,key) => 
                                    <p key={key}>- {item}</p> 
                            )}
                        </ProductDescComponent>

                    </ProductPageElementComponent>
                )}
            </ProductPageListComponent>
        </>
    )
}

export default ProductPage
