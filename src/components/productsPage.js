import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import '../styles/productpage.css'
import UnderMenu from './underMenu'
import axios from 'axios'
// import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next';




const ProductPage = (props) => {
    const categoryList = props.currentCategories.map((item) => [item.Name,item.id])
    const [underCategory, setUnderCategories] = useState([])
    const [id,setId] = useState(props.id || 1);
    
    const { t } = useTranslation();

    useEffect(()=> {
        axios.get(props.url+`/under-categories/`+ id)
        .then(res => {
            console.log(res.data)
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    },[])


    const setMyId = (_id) => {
        setId(_id)
        axios.get(props.url+`/under-categories/`+_id)
        .then(res => {
            console.log(res.data)
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    }



    const addToCart = (item) => {
        props.setCart(item)
        console.log(props.cart)
    }

    const buyItem = (item) => {
        // console.log(item.Price)
        const name = item.Name.split(' ').join('').toLowerCase()
        axios.post(`https://my-apple-store-server.herokuapp.com/create-checkout-session`,{
            name: [name] 
        })
        .then(res => {
            // console.log(res.data)
            window.location.href = res.data
        })
        .catch((error) => console.log(error));
    }
    

       


    return (
        <>
        <UnderMenu setMyId={setMyId} categories={categoryList} />

        <div className='product-page'>
            <div className='product-page_title' onClick={() => console.log(underCategory[0].Descriptions.split('\n'))}>
                {t("productPageTitle")}
            </div>
            
            <div className='product-page_flex'>
                {underCategory.map((item, key) =>
                     
                    <div key={key} className='product-page_flex_product'>
                        {/* <div className='product-page-img' style={{background: `url('${item.Photo.url}') center/100% 100% no-repeat`}}/> */}
                        
                        <div className='product-page-img_block'>
                            <img className='product-page-img' src={item.PhotoURL} />
                        </div>
                        
                        <div className='product-page_flex_product_title'>
                            {item.Name}
                        </div>

                        <div className='product-page_flex_product_under-title'>
                            From ${item.Price}
                        </div>
                        
                        <div onClick={() => buyItem(item)} className='product-page_flex_product_buy'>
                            Buy
                        </div>
                       
                        <div onClick={()=> addToCart(item)} className='product-page_flex_product_buy'>
                            Add to Cart
                        </div>

                        <div className='product-page_flex_product_desc'>
                            {item.Descriptions.split('\n').map((item,key) => 
                                <p key={key}>- {item}</p> 
                            )}
                        </div>
                    </div>
                
                )}     
            </div>
        </div>
        </>
    )
}

ProductPage.propTypes = {
    currentCategories: PropTypes.array,
    id: PropTypes.number,
    cart: PropTypes.array,
    setCart: PropTypes.func,
    jwt: PropTypes.string,
    url: PropTypes.string
}

export default ProductPage
