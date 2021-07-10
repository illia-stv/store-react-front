import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import '../styles/productpage.css'
import UnderMenu from '../components/underMenu'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const ProductPage = (props) => {
    const history = useHistory()
    const categoryList = props.currentCategories.map((item) => [item.Name,item.id])
    const [underCategory, setUnderCategories] = useState([])
    const [id,setId] = useState(props.id || 1);
    // console.log(underCategory)
    // setUnderCategoories('asd')
    const setMyId = (_id) => {
        setId(_id)
        axios.get(`http://localhost:1337/under-categories/`+_id)
        .then(res => {
        //   console.log(res.data);
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    }

    const addToCart = (item) => {
        props.setCart(item)
        console.log(props.cart)
    }

    

    useEffect(() => {
        axios.get(`http://localhost:1337/under-categories/`+id)
        .then(res => {
        //   console.log(res.data);
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    }, []);


    return (
        <>
        <UnderMenu setMyId={setMyId} categories={categoryList} />

        <div className='product-page'>
            <div className='product-page_title' onClick={() => console.log(underCategory[0].Descriptions.split('\n'))}>
                Which Mac is right for you?
            </div>
            
            <div className='product-page_flex'>
                {underCategory.map((item, key) =>
                     
                    <div key={key} className='product-page_flex_product'>
                        {/* <div className='product-page-img' style={{background: `url('${item.Photo.url}') center/100% 100% no-repeat`}}/> */}
                        <div className='product-page-img_block'>
                            <img className='product-page-img' src={'http://localhost:1337' + item.Photo.url} />
                        </div>
                        <div className='product-page_flex_product_title'>
                            {item.Name}
                        </div>
                        <div className='product-page_flex_product_under-title'>
                            From ${item.Price}
                        </div>
                        <div onClick={() => history.push('/buyPage')} className='product-page_flex_product_buy'>
                            Buy
                        </div>
                        <div onClick={()=> addToCart(item)} className='product-page_flex_product_buy'>
                            Add to Cart
                        </div>
                        <div className='product-page_flex_product_desc'>
                            {item.Descriptions.split('\n').map((item,key) => 
                                <p key={key}>{item}</p> 
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
    setCart: PropTypes.func
}

export default ProductPage
